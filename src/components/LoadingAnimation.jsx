import React from 'react';
import loadingGif from '../images/Shy guy split face loading.gif';

const LoadingAnimation = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-800 text-white">
            <img src={loadingGif} alt="Loading" className="mb-4" />
            <div className="text-xl font-bold">...</div>
        </div>
    );
};

export default LoadingAnimation;
