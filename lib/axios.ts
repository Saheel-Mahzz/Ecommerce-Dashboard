import axios from "axios";

export const cax = axios.create({
  baseURL: process.env.NEXT_API_URL,
});

cax.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== undefined ? localStorage.getItem("access_token") : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err),
);
