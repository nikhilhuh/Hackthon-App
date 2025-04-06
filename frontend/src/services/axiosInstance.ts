import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
if (!BACKEND_URL) {
    console.error("Backend URL is not defined in the environment variables.");
    throw new Error("Backend URL is missing. Exiting...");
  }

export const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    timeout: 5000,
    headers: {
        'Content-Type' : 'application/json'
    }
});