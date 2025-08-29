module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect", "<rootDir>/jest-setup.js"],
  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|react-native-safe-area-context|@expo/vector-icons|expo-secure-store|react-native-snap-carousel|react-native-dropdown-picker)/)"
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
