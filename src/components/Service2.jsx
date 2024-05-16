import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from '../assets/img/w1.png'
import img2 from '../assets/img/w2.png'
import img3 from '../assets/img/w3.png'
import img4 from '../assets/img/w4.png'

const data = [
    {
        title: 'Web Development',
        subtitle: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
        price: '$1000',
        img: img1,
    },
    {
        title: 'Web Development',
        subtitle: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
        price: '$1000',
        img: img2,
    },
    {
        title: 'Web Development',
        subtitle: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
        price: '$1000',
        img: img3,
    },
    {
        title: 'Web Development',
        subtitle: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
        price: '$1000',
        img: img4,
    },
]

function Service2() {
    return (
        <div className='container m-auto py-[300px] px-[10px]'>
            <Swiper
            loop={true}
             className="mySwiper"
             >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='grid grid-cols-2'>
                                {/* Left content  */}
                                <div className="">
                                    <div>{item.title}</div>
                                    <div>{item.subtitle}</div>
                                    <div>
                                        <button>Buy It Now</button>
                                    </div>
                                    <div>{item.price}</div>
                                </div>
                                
                                {/* right content  */}
                                <div className="">
                                    <img src={item.img} alt="" className='m-auto' />
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
