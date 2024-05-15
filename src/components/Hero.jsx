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
import { EffectFade, Autoplay} from 'swiper/modules';

const data = [img1, img2, img3, img4]
function Hero() {
    const [visibleImg, setVisibleImg] = React.useState(0)
    console.log('visibleImg', visibleImg)
    return (
        <div className='grid grid-cols-2 gap-x-5 h-[70vh] pt-52 container mx-auto px-10'>
            <div className='h2-title text-white' >
                <div className='font-bold leading-[4rem] text-[60px] mb-[30px]'>
                    The best landing page for your digital product.
                </div>
                <div style={{ fontSize: '20px' }} className="p-subtitle leading-8 mb-[40px]">
                    Our cloud computing platform was built with simplicity so managing infrastructure is easy.
                </div>
                {/* <div style={{ fontSize: '25px' }} className={'h-30 flex justify-between text-white px-10 text-lg py-4 p-12'} >
                    <button id="myBtn" style={{ fontSize: '18px' }} className='relative cursor-pointer hover:bg-blue-600 duration-500 hover:text-white rounded-md p-[20px] my-1'>Discover Now</button>
                </div> */}
                <button className=' px-[50px] py-[18px] rounded-md hover:text-[#103178] bg-[#103178] text-[20px] hover:bg-white duration-500 font-bold'>
                    Discover Now
                </button>
            </div>

            <div className='relative'>
                <img src={bgImage} className='max-h-[30rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
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
                                <img src={item} className={`max-h-[30rem] mx-auto ${visibleImg==i?'opacity-100':'opacity-0'} duration-500`} />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default Hero
