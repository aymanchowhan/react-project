import React from 'react'
import { TfiDirectionAlt } from "react-icons/tfi";
import dubai from '../assets/img/dubai.png';
import london from '../assets/img/london.png';
import nyc from '../assets/img/nyc.png';
function Contact() {
    const data = [
        {
            img: dubai,
            title: "UAE",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptas?",
            cont: "+97 45522522",
        },
        {
            img: london ,
            title: "London",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptas?",
            cont: "+97 45522522",
        },
        {
            img: nyc,
            title: "New York City",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptas?",
            cont: "+97 45522522",
        },

    ]
    return (
        <div className='container mx-auto py-[150px]'>
            <div className='bg-[#3c89e0] rounded-full h-[70px] w-[70px] flex mb-[40px] mx-auto text-center'>
                <TfiDirectionAlt className=' text-white text-3xl m-auto' />
            </div>

            <div className='text-center text-[34px] text-[#0f1d46] lg:text-[60px] h2-title font-bold lg:leading-[4rem] mb-[90px]'>Choose your nearest branch
            </div>


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[88%] mx-auto gap-8 pb-10'>
        {
          data.map((item, index) => (
            <div className=' p-[30px] shadow-2xl hover:shadow-black hover:shadow-2xl'>
            <img src={item.img} className='mx-auto mb-4'/>
              <div className='text-2xl font-bold text-center h2-title text-[#0F1D46] mb-[15px]'>
                {item.title}
              </div>
              <div className='text-center text-base p-subtitle text-[#0F1D46] mb-[15px]'>
                {item.desc}
              </div>
              <div className='text-center h2-title text-[22px] text-[#0F1D46]'>
                {item.cont}
              </div>
            </div>
            
          ))
        }
      </div>
      <div className='bg-red-500'></div>
    </div>




  )
}

export default Contact
