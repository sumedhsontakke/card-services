import axiosApiInstance from '../config/adaptor';
import { API_BASE_URL } from '../config/api';
import { TTokens } from '../models';
import { deleteItem, getItem, saveItem } from './storageHelper';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN';
const API_URL = API_BASE_URL;

/**
 * Get access token from SecureStore
 */
export async function getAccessToken(): Promise<string | null> {
  return await getItem(ACCESS_TOKEN_KEY);
}

/**
 * Get refresh token from SecureStore
 */
export async function getRefreshToken(): Promise<string | null> {
  return await getItem(REFRESH_TOKEN_KEY);
}

/**
 * Save access and refresh tokens securely
 */
export async function saveTokens(accessToken: string, refreshToken: string) {
  await saveItem(ACCESS_TOKEN_KEY, accessToken);
  await saveItem(REFRESH_TOKEN_KEY, refreshToken);
}

/**
 * Clear tokens from SecureStore
 */
export async function clearTokens() {
  await deleteItem(ACCESS_TOKEN_KEY);
  await deleteItem(REFRESH_TOKEN_KEY);
}

/**
 * Refresh access token using the refresh token
 */
export async function refreshToken(): Promise<TTokens | null> {
  try {
    const refreshToken = await getRefreshToken();
    if (!refreshToken) return null;

    const response = await axiosApiInstance.post(`${API_URL}/refresh-token`, {
      refreshToken,
    });
    console.log(response);
    const { token, refreshToken: newRefreshToken } = response.data;

    await saveTokens(token, newRefreshToken);

    return {
        accessToken: token,
        refreshToken: newRefreshToken,
    };
  } catch (error) {
    console.error('Token refresh failed:', error);
    await clearTokens();
    return null;
  }
}
