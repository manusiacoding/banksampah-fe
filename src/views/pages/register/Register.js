import React, { useState, useEffect } from 'react';
import RegisterMobile from './RegisterMobile';
import RegisterDesktop from './RegisterDesktop';

const Register = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {windowSize.width <= 767 ? (
                <RegisterMobile />
            ) : (
                <RegisterDesktop />
            )}
        </>
    )
};

export default Register;