import { API } from './url';

const axios = require('axios');

export const axiosInstance = axios.create({
    baseURL: API.BASE(),
})

axiosInstance.interceptors.request.use((req) => {
    const token = localStorage.getItem('token')
    if (token) {
        req.headers.Authorization = `Bearer ${token}`
    }
    return req;
},
    error => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => response, // Pass through the response if there's no error
    (error) => {
        if (error.response && error.response.status === 401) {
            console.log('wrapper message');
            // Optional: Redirect to login page or handle token expiration
            // window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);