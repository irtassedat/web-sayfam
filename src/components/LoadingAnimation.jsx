import React from 'react';
import './../index.css'; 
import { useTheme } from '../context/ThemeContext';

const LoadingAnimation = () => {
    const { theme } = useTheme();

    return (
        <div className={`loader-container ${theme === 'dark' ? 'bg-gradient-to-r-dark' : 'bg-gradient-to-r-light light-mode'} container mx-auto`}> 
            <div className="loader-wrapper">
                <div className="loader"></div>
            </div>
            <div className={`text-xl font-bold mt-12 ${theme === 'dark' ? 'text-white' : 'text-light-mode'}`}>....</div>
        </div>
    );
};

export default LoadingAnimation;
