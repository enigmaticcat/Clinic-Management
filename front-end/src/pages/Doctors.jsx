import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useUser } from '../context/UserContext';
const Doctors = () => {
    const { speciality } = useParams();
    const { userId } = useUser();
    const [filterDoc, setFilterDoc] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const { doctors } = useContext(AppContext);

    const getUserIdFromUrl = () => {
        const params = new URLSearchParams(location.search);
        return params.get('id');
    };

    const applyFilter = () => {
        if (speciality) {
            setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
        } else {
            setFilterDoc(doctors);
        }
    };

    useEffect(() => {
        applyFilter();
    }, [doctors, speciality]);

    const handleNavigate = (path) => {
        let updatedPath = path;
        const currentUserId = userId || getUserIdFromUrl();
        if (currentUserId) {
            updatedPath = `${path}?id=${currentUserId}`;
        }
        navigate(updatedPath);
    };

    return (
        <div>
            <p className='text-gray-600'>
                Browse through the doctors specialists.
            </p>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                <div className='flex flex-col gap-4 text-sm text-gray-600'>
                    <p
                        onClick={() => handleNavigate('/doctors/General physician')}
                        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                            speciality === 'General physician' ? 'bg-indigo-100 text-black' : ''
                        }`}>
                        General physician
                    </p>
                    <p
                        onClick={() => handleNavigate('/doctors/Gynecologist')}
                        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                            speciality === 'Gynecologist' ? 'bg-indigo-100 text-black' : ''
                        }`}>
                        Gynecologist
                    </p>
                    <p
                        onClick={() => handleNavigate('/doctors/Dermatologist')}
                        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                            speciality === 'Dermatologist' ? 'bg-indigo-100 text-black' : ''
                        }`}>
                        Dermatologist
                    </p>
                    <p
                        onClick={() => handleNavigate('/doctors/Pediatricians')}
                        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                            speciality === 'Pediatricians' ? 'bg-indigo-100 text-black' : ''
                        }`}>
                        Pediatricians
                    </p>
                    <p
                        onClick={() => handleNavigate('/doctors/Neurologist')}
                        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                            speciality === 'Neurologist' ? 'bg-indigo-100 text-black' : ''
                        }`}>
                        Neurologist
                    </p>
                    <p
                        onClick={() => handleNavigate('/doctors/Gastroenterologist')}
                        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                            speciality === 'Gastroenterologist' ? 'bg-indigo-100 text-black' : ''
                        }`}>
                        Gastroenterologist
                    </p>
                </div>
                <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
                    {filterDoc.map((item, index) => (
                        <div
                            onClick={() => handleNavigate(`/appointments/${item._id}`)}
                            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                            key={index}>
                            <img className='bg-blue-50' src={item.image} alt='' />
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                    <p>Available</p>
                                </div>
                                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                <p className='text-gray-600 text-sm'>{item.speciality}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors
