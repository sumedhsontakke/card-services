import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './navigation/AppNavigator';
import { navigationRef } from "./services/navigationService";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Sidebar from './components/Sidebar/Sidebar';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Sidebar />
          <NavigationContainer ref={navigationRef} >
            <AppNavigator />
          </NavigationContainer>
        </AuthProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}
