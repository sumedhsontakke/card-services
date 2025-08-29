/* eslint-disable no-undef */
import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

// Mock SafeAreaProvider so it renders children in tests
jest.mock('react-native-safe-area-context', () => {
  const actual = jest.requireActual('react-native-safe-area-context');
  return {
    ...actual,
    SafeAreaProvider: ({ children }) => children,
    SafeAreaView: actual.SafeAreaView,
  };
});

jest.mock("@expo/vector-icons", () => {
  return {
    Ionicons: "Ionicons",
  };
});

// Mock SecureStore
jest.mock('expo-secure-store', () => ({
  setItemAsync: jest.fn(),
  getItemAsync: jest.fn(),
  deleteItemAsync: jest.fn(),
}));


// Optionally mock RNGH
jest.mock('react-native-gesture-handler', () => {
  return {
    ...jest.requireActual('react-native-gesture-handler'),
    GestureHandlerRootView: ({ children }) => children,
  };
});