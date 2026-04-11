import axios from "axios";
import { auth } from "../firebase/firebase.config";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

const api = axios.create({
  baseURL: `${API_URL}/api`,
});

// Attach Firebase ID token to every request
api.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
