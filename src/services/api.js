import axios from 'axios';

const baseURL = 'https://web-backend-7nev.onrender.com/api';
//const baseURL = 'http://localhost:3000/api';

const api = axios.create({
    baseURL: baseURL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('accessToken');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;
