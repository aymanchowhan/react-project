import React from 'react'
import { SlEnergy } from "react-icons/sl";
import img1 from '../assets/img/testimonial-1.png';
import img2 from '../assets/img/testimonial-2.png';
import img3 from '../assets/img/testimonial-3.png';
import img4 from '../assets/img/testimonial-4.png';
import img5 from '../assets/img/testimonial-5.png';
import img6 from '../assets/img/testimonial-6.png';
import img7 from '../assets/img/testimonial-7.png';

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

  function Testimonial() {
    const data = [
      {
        test: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab doloremque nesciunt quo quis tenetur. Facilis harum laboriosam doloremque iure unde, inventore repudiandae molestiae fugiat nihil.",
        img:img1,
        name: "Ayman Chowhan",
        desig: "Timepass",
      },
      {
        test: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab doloremque nesciunt quo quis tenetur. Facilis harum laboriosam doloremque iure unde, inventore repudiandae molestiae fugiat nihil.",
        img:img2,
        name: "Ayman Chowhan",
        desig: "Timepass",
      },
      {
        test: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab doloremque nesciunt quo quis tenetur. Facilis harum laboriosam doloremque iure unde, inventore repudiandae molestiae fugiat nihil.",
        img:img3,
        name: "Ayman Chowhan",
        desig: "Timepass",
      },
      {
        test: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab doloremque nesciunt quo quis tenetur. Facilis harum laboriosam doloremque iure unde, inventore repudiandae molestiae fugiat nihil.",
        img:img4,
        name: "Ayman Chowhan",
        desig: "Timepass",
      },
      {
        test: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab doloremque nesciunt quo quis tenetur. Facilis harum laboriosam doloremque iure unde, inventore repudiandae molestiae fugiat nihil.",
        img:img5,
        name: "Ayman Chowhan",
        desig: "Timepass",
      },
      {
        test: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab doloremque nesciunt quo quis tenetur. Facilis harum laboriosam doloremque iure unde, inventore repudiandae molestiae fugiat nihil.",
        img:img6,
        name: "Ayman Chowhan",
        desig: "Timepass",
      },
      {
        test: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab doloremque nesciunt quo quis tenetur. Facilis harum laboriosam doloremque iure unde, inventore repudiandae molestiae fugiat nihil.",
        img:img7,
        name: "Ayman Chowhan",
        desig: "Timepass",
      },
    ]
    return (
      <div>
        <div className='container mx-auto pt-[150px] pb-[70px]'>
          <div className='bg-[#3c89e0] rounded-full h-[70px] w-[70px] flex mb-[40px] mx-auto text-center'>
            <SlEnergy className=' text-white text-3xl m-auto' />
          </div>

          <div className='text-center text-[34px] text-[#0f1d46] lg:text-[60px] h2-title font-bold lg:leading-[4rem] mb-[90px]'>People always loves our product
          </div>
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
                    1024:{
                        slidesPerView: 4,
                    },

                }}
                loop={true}
                className="mySwiper"
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='grid grid-cols-1 lg:grid-cols-4'>

                                <div className="">
                                    <img src={item.img} alt="" className='m-auto h-[500px]' />
                                    <div className='text-[16px] p-subtitle mb-[30px] text-white text-left'>
                                        {item.title}</div>
                                    <div className='text-left'>
                                    </div>
                                    <div className=' text-[36px] lg:text-[60px] p-subtitle font-bold text-white text-center lg:text-left'>
                                        {item.price}</div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
      </div>
    )
  }

export default Testimonial
