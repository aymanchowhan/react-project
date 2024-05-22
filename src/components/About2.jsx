import React from 'react'
import { IoIosBasketball } from "react-icons/io";
import bgImage from '../assets/img/circle-bg.png'
import img from '../assets/img/wtach-section-2.png'

export const About2 = () => {
    return (
        <div className='container m-auto py-[100px] px-[50px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 h-96'>
                <div className='lg:ml-10'>
                    <div className='bg-[#1980FA] rounded-full h-[70px] w-[70px] flex mb-[40px] mx-auto lg:mx-0'>
                        <IoIosBasketball className=' text-white text-3xl m-auto' />
                    </div>
                    <div className='lg:text-[60px] text-[36px] text-[#0f1d46] font-bold leading-10 lg:leading-[4rem] h2-title text-center lg:text-left m-auto mb-[30px] lg:mr-[10%]'>World best water watch resistant</div>
                    <div className='text-[16px] p-subtitle mb-[10px] text-[#0F1D4660] text-center lg:text-left'> Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue consequat. In posuere, nunc sit amet laoreet blandit, urna sapien imperdiet lectus, et molestie sem tortor quis dui. </div>

                    <div className='flex'>
                        <button className='px-[50px] py-[18px] bg-[#1980FA] rounded-md text-[16px] h2-title duration-500 mt-[20px] font-bold text-white hover:shadow-2xl hover:shadow-[#1980FA] mx-auto lg:mx-0'>
                            Discover Now
                        </button>
                    </div>
                </div>
                <div className='hidden lg:block relative'>
                    <img src={bgImage} alt="" srcset="" className='absolute -top-[10%] -left-[10%]' />
                    <img src={img} alt="" srcset="" className='absolute' />
                </div>
            </div>
        </div>
    )
}

