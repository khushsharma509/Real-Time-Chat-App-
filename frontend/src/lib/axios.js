import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://real-time-chat-app-1-y1e0.onrender.com/api" : "/api",
  withCredentials: true,
});
