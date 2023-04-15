import React from 'react';

export default function Weather() {
    return (
        <div className='bg-bluish rounded-lg'>
            <ul className='grid grid-cols-4 grid-rows-2 h-32 p-5 content-center text-white text-lg'>
                <li>City</li>
                <li>Currently</li>
                <li>Icon</li>
                <li>Humidity</li>
                <li>Date</li>
                <li>High Low</li>
                <li>Icon</li>
                <li>%</li>
            </ul>
        </div>
    )
}