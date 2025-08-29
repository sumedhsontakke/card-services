import { jwtDecode } from "jwt-decode";
import React, { createContext, ReactNode, useCallback, useContext, useEffect, useReducer, useRef } from 'react';
import { doLogin } from '../hooks/api/login';
import { TJWTDecode, TLoginRequest } from '../models';
import { clearTokens, getAccessToken, refreshToken, saveTokens } from '../services/authService';

type AuthState = {
    user: string | null;
    loading: boolean;
    initializing: boolean; 
    loginError?: Error;
};

type TError = {
    data: { message: string };
} & Error;

type AuthAction =
    | { type: 'LOGIN'; payload: string }
    | { type: 'LOGOUT' }
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_INITIALIZING'; payload: boolean }
    | { type: 'LOGINERROR'; payload: TError };

const initialState: AuthState = { user: null, loading: false, initializing: true };

function authReducer(state: AuthState, action: AuthAction): AuthState {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload, loginError: undefined, loading: false };
        case 'LOGINERROR':
            return { ...state, loginError: action.payload, loading: false };
        case 'LOGOUT':
            return { ...state, user: null, loading: false };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_INITIALIZING':
            return { ...state, initializing: action.payload };
        default:
            return state;
    }
}

type AuthContextType = {
    state: AuthState;
    login: (name: TLoginRequest, accessToken?: string, refreshTokenValue?: string) => Promise<void>;
    logout: () => Promise<void>;
    setLoading: (loading: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const refreshTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const scheduleTokenRefresh = useCallback((token: string) => {
        try {
            const { exp } = jwtDecode<TJWTDecode>(token);

            const now = Date.now();
            const refreshTime = (exp * 1000) - (now - (60 * 1000)); // refresh 1 min before expiry
            console.log(refreshTime);
            if (refreshTimer.current) clearTimeout(refreshTimer.current);

            if (refreshTime > 0) {
                refreshTimer.current = setTimeout(async () => {
                    try {
                        const newTokens = await refreshToken();
                        if (newTokens?.accessToken) {
                            await saveTokens(newTokens.accessToken, newTokens.refreshToken);
                            scheduleTokenRefresh(newTokens.accessToken);
                            const { username } = jwtDecode<TJWTDecode>(token);
                            dispatch({ type: 'LOGIN', payload: username });
                        } else {
                            await clearTokens();
                            dispatch({ type: 'LOGOUT' });
                        }
                    } catch (err) {
                        console.log('Auto refresh failed', err);
                        await clearTokens();
                        dispatch({ type: 'LOGOUT' });
                    }
                }, refreshTime);
            }
        } catch (err) {
            console.log('Failed to decode token', err);
        }
    }, []);


    const login = async (credentials: TLoginRequest, accessToken?: string, refreshTokenValue?: string) => {
        if (accessToken && refreshTokenValue) {
            await saveTokens(accessToken, refreshTokenValue);
            scheduleTokenRefresh(accessToken);
            const { username } = jwtDecode<TJWTDecode>(accessToken);

            dispatch({ type: 'LOGIN', payload: username });
        } else {
            const result = await doLogin(credentials);
            console.log('Login result:', result);
            if (result.token) {
                await saveTokens(result.token, result.refreshToken);
                scheduleTokenRefresh(result.token);
                dispatch({ type: 'LOGIN', payload: credentials.username });
            } else {
                dispatch({ type: 'LOGINERROR', payload: { ...result.response, message: result.response.data.message } });
            }
        }
    };

    // Logout function
    const logout = async () => {
        if (refreshTimer.current) clearTimeout(refreshTimer.current);
        await clearTokens();
        dispatch({ type: 'LOGOUT' });
    };

    const setLoading = (loading: boolean) => dispatch({ type: 'SET_LOADING', payload: loading });

    // Initialize auth on app start
    useEffect(() => {
        const initAuth = async () => {
            dispatch({ type: 'SET_INITIALIZING', payload: true });

            // Check if an access token exists
            const accessToken = await getAccessToken();

            if (accessToken) {
                const { username } = jwtDecode<TJWTDecode>(accessToken);
                dispatch({ type: 'LOGIN', payload: username });
            } else {
                //  No access token, attempt refresh
                const newToken = await refreshToken();

                if (newToken?.accessToken) {
                    const { username } = jwtDecode<TJWTDecode>(newToken?.accessToken);
                    await saveTokens(newToken.accessToken, newToken.refreshToken);
                    dispatch({ type: 'LOGIN', payload: username });
                    scheduleTokenRefresh(newToken.accessToken);
                } else {
                    dispatch({ type: 'LOGOUT' });
                }
            }

            dispatch({ type: 'SET_INITIALIZING', payload: false });
        };

        initAuth();

        return () => {
            if (refreshTimer.current) clearTimeout(refreshTimer.current);
        };
    }, [scheduleTokenRefresh]);

    return (
        <AuthContext.Provider value={{ state, login, logout, setLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
}
