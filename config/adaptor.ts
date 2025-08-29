import axios from "axios";
import { getAccessToken } from "../services/authService";
import { API_BASE_URL } from "./api";

const axiosApiInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Attach access token before every request
axiosApiInstance.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export type { AxiosError, AxiosResponse } from 'axios';
export default axiosApiInstance;