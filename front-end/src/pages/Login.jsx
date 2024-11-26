
import React, { useState } from 'react';
import axiosClient from '../axiosClient';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
const Login = () => {
    const [state, setState] = useState('Sign Up');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();  
    const { setUserId } = useUser(); 

    const onsubmitHandler = async (event) => {
        event.preventDefault();

        try {
            let response;

            if (state === 'Sign Up') {
                response = await axiosClient.post('/register', {
                    name,
                    email,
                    password,
                });
                console.log('Sign Up Success:', response);
            } else {
                response = await axiosClient.post('/login', {
                    email,
                    password,
                });
                console.log('Login Success:', response);
            }

            if (response?.user) {
                const userId = response.user.id;
                console.log("User ID:", userId);
                setUserId(userId);  // Cập nhật userId vào context
                navigate('/');  // Điều hướng về trang chủ
            } else {
                console.error("User data not found.");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form className='min-h-[80vh] flex items-center' onSubmit={onsubmitHandler}>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
                <p>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
                <p>Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointment</p>
                {state === 'Sign Up' && (
                    <div>
                        <p>Full Name</p>
                        <input 
                            type="text" 
                            onChange={(e) => setName(e.target.value)} 
                            value={name} 
                            placeholder="Enter your full name"
                        />
                    </div>
                )}
                <div>
                    <p>Email</p>
                    <input 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <p>Password</p>
                    <input 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password} 
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    {state === 'Sign Up' ? "Create Account" : "Login"}
                </button>
                <button 
                    type="button" 
                    onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
                    className="text-blue-500 underline"
                >
                    {state === 'Sign Up' ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                </button>
            </div>
        </form>
    );
};


export default Login;
