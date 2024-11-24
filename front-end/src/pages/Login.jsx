import React, { useState } from 'react';
import axiosClient from '../axiosClient'; // Import axiosClient

const Login = () => {
    // State để lưu trữ giá trị input của form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Hàm xử lý khi form được submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Logging in with:', { email, password });

        try {
            // Gửi request lên backend bằng axiosClient
            const response = await axiosClient.post('/login', {
                email: email,
                password: password,
            });

            // Xử lý phản hồi từ server
            if (response) {
                alert('Login successful!');
                console.log('Server response:', response);
            }
        } catch (error) {
            // Xử lý lỗi nếu có
            alert('Login failed! Please check your credentials.');
            console.error('Error:', error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                <h2 style={{ textAlign: 'center' }}>Login</h2>
                
                {/* Input cho Email */}
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: '10px', marginBottom: '10px', fontSize: '16px' }}
                />
                
                {/* Input cho Password */}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: '10px', marginBottom: '20px', fontSize: '16px' }}
                />
                
                {/* Nút submit */}
                <button
                    type="submit"
                    style={{
                        padding: '10px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        fontSize: '16px',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
