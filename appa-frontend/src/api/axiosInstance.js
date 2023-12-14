// Import the axios library
import axios from 'axios';

// Create an instance of axios with custom configurations
const axiosInstance = axios.create({
    // Specify the base URL for API requests
    baseURL: 'http://127.0.0.1:8000',
    // Set default headers for all requests to 'application/json'
    headers: {
        // 'Authorization': accessToken && `Token ${accessToken}`, 
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).accessToken : null;
        if (token) {
            config.headers = {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json',
            }
        }
        return config;
    },
    (error) => {
        Promise.reject(error)
    }
);



// Export the configured axios instance
export default axiosInstance;