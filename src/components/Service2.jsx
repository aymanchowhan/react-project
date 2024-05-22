import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from '../assets/img/w1.png'
import img2 from '../assets/img/w2.png'
import img3 from '../assets/img/w3.png'
import img4 from '../assets/img/w4.png'

const data = [
    {
        title: ' Apple Watch 3 Special Edition',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt at quidem tempora libero quae error ipsa minus animi vel.',
        price: 'Only $99',
        img: img1,
    },
    {
        title: ' Apple Watch 3 Special Edition',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt at quidem tempora libero quae error ipsa minus animi vel.',
        price: 'Only $99',
        img: img2,
    },
    {
        title: ' Apple Watch 3 Special Edition',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt at quidem tempora libero quae error ipsa minus animi vel.',
        price: 'Only $99',
        img: img3,
    },
    {
        title: 'Apple Watch 3 Special Edition',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt at quidem tempora libero quae error ipsa minus animi vel.',
        price: 'Only $99',
        img: img4,
    },
]

function Service2() {
    return (
        <div className='container m-auto py-[100px] px-10'>
            <Swiper
                loop={true}
                className="mySwiper"
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='grid grid-cols-1 lg:grid-cols-2'>
                                {/* Left content  */}
                                <div className="">
                                    <div className='text-center lg:text-left text-[36px] lg:text-[60px] h2-title font-bold mb-[10px] text-white'>
                                        {item.title}</div>
                                    <div className='text-[16px] p-subtitle mb-[30px] text-white text-center lg:text-left'>
                                        {item.subtitle}</div>
                                    <div className='text-center lg:text-left'>
                                        <button className='px-[50px] py-[18px] mb-[30px] rounded-md hover:text-[#103178] bg-[#103178] text-[20px] hover:bg-white text-white duration-500 h2-title m-auto lg:mb-[40px]'>
                                            Buy it Now!
                                        </button>
                                    </div>
                                    <div className=' text-[36px] lg:text-[60px] p-subtitle font-bold text-white text-center lg:text-left'>
                                        {item.price}</div>
                                </div>

                                {/* right content  */}
                                <div className="">
                                    <img src={item.img} alt="" className='m-auto h-[500px]' />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Service2
