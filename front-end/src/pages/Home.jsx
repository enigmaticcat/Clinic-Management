import React, { useEffect } from 'react';
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctors from '../components/TopDoctors';
import Banner from '../components/Banner';
import { useNavigate, useLocation } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Hàm lấy tham số id từ URL
    const getUserIdFromUrl = () => {
        const params = new URLSearchParams(location.search);
        return params.get('id');
    };

    // Hàm điều hướng với id
    const navigateWithId = (path) => {
        const userId = getUserIdFromUrl();
        if (userId) {
            navigate(`${path}?id=${userId}`);
        } else {
            navigate(path);
        }
    };

    useEffect(() => {
        // Nếu cần xử lý gì khi component load (như gọi API hoặc tính toán)
    }, []);

    return (
        <div>
            <Header />
            <SpecialityMenu navigateWithId={navigateWithId} />
            <TopDoctors navigateWithId={navigateWithId} />
            <Banner navigateWithId={navigateWithId} />
        </div>
    );
};

export default Home;
