import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext'; 

const MyAppointments = () => {
    const { userId } = useUser(); 
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if (userId) {
           
            fetch(`/api/appointments?userId=${userId}`)
                .then((response) => response.json())
                .then((data) => setAppointments(data))
                .catch((error) => console.error('Error fetching appointments:', error));
        }
    }, [userId]);

    return (
        <div className="my-10 text-center">
            <h1 className="text-2xl font-semibold text-gray-800">My Appointments</h1>
            
            {userId ? (
                <div className="mt-6">
                    {appointments.length > 0 ? (
                        <ul className="list-disc text-left mx-auto">
                            {appointments.map((appointment, index) => (
                                <li key={index} className="text-gray-700">
                                    <p>Date: {appointment.date}</p>
                                    <p>Doctor: {appointment.doctorName}</p>
                                    <p>Speciality: {appointment.speciality}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">You have no appointments scheduled.</p>
                    )}
                </div>
            ) : (
                <p className="mt-4 text-gray-500">You are not logged in.</p>
            )}
        </div>
    );
};

export default MyAppointments;
