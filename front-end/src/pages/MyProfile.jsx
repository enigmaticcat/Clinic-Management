import React, { useEffect } from 'react';
import { useUser } from '../context/UserContext'; // Import hook từ UserContext

const MyProfile = () => {
    const { userId } = useUser(); // Lấy userId từ context

    useEffect(() => {
        if (userId) {
            console.log('User ID in MyProfile:', userId); // In ra userId nếu có
        }
    }, [userId]);

    return (
        <div className="my-10 text-center">
            <h1 className="text-2xl font-semibold text-gray-800">My Profile</h1>
            
            {userId ? (
                <p className="mt-4 text-gray-700">Welcome, User ID: {userId}</p>
            ) : (
                <p className="mt-4 text-gray-500">You are not logged in.</p>
            )}
        </div>
    );
};

export default MyProfile;
