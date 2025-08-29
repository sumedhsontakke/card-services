import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomHeader from '../components/CustomHeader';
import { useAuth } from '../context/AuthContext';
import { TRootStackParamList } from '../models';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Transactions from '../screens/Transactions';

const Stack = createNativeStackNavigator<TRootStackParamList>();

export function AppNavigator() {
    const { state } = useAuth();
    

    return (
        <Stack.Navigator>
                {state.user ? (
                    <>
                        <Stack.Screen 
                            name="Home"
                            component={Home} 
                            options={{
                                header: () => (
                                    <CustomHeader
                                        title="Home"
                                    />
                                ),
                            }}
                        />
                        <Stack.Screen 
                            name="Transactions"
                            component={Transactions} 
                            options={{
                                header: () => (
                                    <CustomHeader
                                        title="Transactions"
                                    />
                                ),
                            }}
                        />
                        
                    </>
                ) : (
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                )}
        </Stack.Navigator>
    );
}
