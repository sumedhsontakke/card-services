import { Platform } from "react-native";

const API_CONFIG = {
  local: Platform.OS === 'web' ? 'http://localhost:3001' : 'http://10.0.2.2:3001',
};

const ENV = 'local';

export const API_BASE_URL = API_CONFIG[ENV];