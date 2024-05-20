import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PiCubeTransparentFill } from "react-icons/pi";
import img1 from '../assets/img/watch-item-1.png';
import img2 from '../assets/img/watch-item-2.png';
import img3 from '../assets/img/watch-item-3.png';
import img4 from '../assets/img/w1.png';
import img5 from '../assets/img/w2.png';
import img6 from '../assets/img/w3.png';
import img7 from '../assets/img/w4.png';
function Gallary() {
    const [isHovered, setIsHovered] = useState(null)

    const data = [
        {
            img: img1,
            title: "Apple Watch",
            price: "$100",
        },
        {
            img: img2,
            title: "Apple Watch",
            price: "$100",
        },
        {
            img: img3,
            title: "Apple Watch",
            price: "$100",
        },
        {
            img: img4,
            title: "Apple Watch",
            price: "$100",
        },
        {
            img: img5,
            title: "Apple Watch",
            price: "$100",
        },
        {
            img: img6,
            title: "Apple Watch",
            price: "$100",
        },
        {
            img: img7,
            title: "Apple Watch",
            price: "$100",
        },
    ]
    return (
        <div className='container mx-auto pt-[150px] pb-[70px] lg:px-40'>
            <div className='bg-[#3c89e0] rounded-full h-[70px] w-[70px] flex mb-[40px] mx-auto text-center'>
                <PiCubeTransparentFill className=' text-white text-3xl m-auto' />
            </div>
            <div className='text-center text-[34px] text-[#0f1d46] lg:text-[60px] h2-title font-bold lg:leading-[4rem] mb-[90px]'>New Arrivals exclusive watches
            </div>
            <Swiper
                breakpoints={{
                    // for mobile view 
                    0: {
                        slidesPerView: 1,
                    },
                    //for small tablet view
                    640: {
                        slidesPerView: 2,
                    },
                    //for tablet view
                    768: {
                        slidesPerView: 3,
                    },
                    // for laptop view
                    1024: {
                        slidesPerView: 4,
                    },

                }}
                loop={true}
                className="mySwiper"
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={`m-[15px] p-[30px] rounded-lg shadow-xl`} onMouseOver={() => setIsHovered(index)} onMouseOut={() => setIsHovered(null)}>
                                <img src={item.img} alt="" className={`m-auto h-[182px] w-[154px] duration-500 text-center mb-7 ${isHovered == index ? 'scale-125' : ''}`} />
                                <div className={`text-[22px] p-subtitle mb-[15px] text-center`}>
                                    {item.title}</div>

                                <div className=' text-[22px] h2-title font-bold text-center text-[#1980FA]'>
                                    {item.price}</div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}



export default Gallary
