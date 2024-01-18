import React, { useState, useEffect } from 'react';
import LoginMobile from './LoginMobile';
import LoginDesktop from './LoginDesktop';

const Login = () => {
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
                <LoginMobile />
            ) : (
                <LoginDesktop />
            )}
        </>
    )
};

export default Login;