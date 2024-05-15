import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";

function About() {
    return (
        <div className='container m-auto py-[150px]'>
            <div className='grid grid-cols-2 h-96'>
                <div className='bg-red-500'></div>
                <div>
                    <div className='bg-[#1980FA] rounded-full h-[70px] w-[70px] flex mb-[40px]'>
                        <FaTelegramPlane className=' text-white text-3xl m-auto' />
                    </div>
                        <div>Book your flights from anywhere</div>
                </div>
            </div>
        </div>
    )
}

export default About
