import React from 'react';
import img1 from '../assets/img/w1.png'
import img2 from '../assets/img/w2.png'
import img3 from '../assets/img/w3.png'
import img4 from '../assets/img/w4.png'
import bgImage from '../assets/img/circle-bg-2.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';

const data = [img1, img2, img3, img4]
function Hero() {
    const [visibleImg, setVisibleImg] = React.useState(0)
    return (
        <div id='home' className='grid grid-cols-1 lg:grid-cols-2 gap-x-5 h-[70vh] pt-52 container mx-auto'>
            <div className='h2-title text-white px-10' >
                <div className='font-bold lg:leading-[4rem] text-center lg:text-left leading-[2.5rem] text-[34px] lg:text-[60px] mb-[30px]'>
                    The best landing page for your digital product.
                </div>
                <div style={{ fontSize: '20px' }} className="p-subtitle leading-8 mb-[40px] text-center lg:text-left">
                    Our cloud computing platform was built with simplicity so managing infrastructure is easy.
                </div>
                <div className='flex mb-[50px]'>
                    <button className='px-[50px] py-[18px] rounded-md hover:text-[#103178] bg-[#103178] text-[20px] hover:bg-white duration-500 font-bold m-auto lg:m-0'>
                        Discover Now
                    </button>
                </div>
            </div>

            <div className='relative'>
                <img src={bgImage} className='sm:h-[30rem] h-[25rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Autoplay]}
                    className="mySwiper"
                    onSlideChange={(swiper) => setVisibleImg(swiper.activeIndex)}
                >
                    {
                        data.map((item, i) =>
                            <SwiperSlide>
                                <img src={item} className={`max-h-[30rem] mx-auto ${visibleImg == i ? 'opacity-100' : 'opacity-0'} duration-500`} />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default Hero
