// src/axiosClient.js
import axios from 'axios';

// Tạo một instance của axios với cấu hình mặc định
const axiosClient = axios.create({
    baseURL: 'http://localhost:5000/api', // URL của server backend
    headers: {
        'Content-Type': 'application/json',
    }
});

// Cấu hình interceptor cho response để xử lý lỗi toàn cục nếu cần
axiosClient.interceptors.response.use(
    (response) => {
        // Xử lý response thành công
        return response.data;
    },
    (error) => {
        // Xử lý lỗi, ví dụ như hiện thông báo lỗi
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

export default axiosClient;
