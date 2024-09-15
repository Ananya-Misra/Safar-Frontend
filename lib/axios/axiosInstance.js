import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL || 'https://safar-azure.vercel.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptors
axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptors
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle errors globally
        return Promise.reject(error);
    }
);

export default axiosInstance;
