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
                        <div className='text-[60px] font-bold leading-[4rem] h2-title m-auto mb-[30px]'>Book your flights
                         from anywhere</div>
                         <div className='text-[16px] p-subtitle m-[10px]'> Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat. In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus, et molestie sem tortor quis dui. </div>

     <button className=' px-[50px] py-[18px] bg-gradient-to-r from-blue-500 rounded-md bg-[#1980FA] text-[20px] hover:bg-white duration-500 m-[20px]'>
                    Discover Now
                </button>
                </div>
            </div>
        </div>
    )
}

export default About
