import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function PlayButton() {

    const Navigate = useNavigate();
    function handleClick() {
        Navigate("/start")
    }
    return (
        <div className="flex items-center justify-center min-h-screen">
            <button className="bg-blue-500 text-white p-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleClick}>
                <FaPlay className="w-6 h-6" />
            </button>
        </div>
    );
}

export default PlayButton;
