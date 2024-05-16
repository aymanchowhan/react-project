import React from 'react'
import { LiaStaylinked } from "react-icons/lia";
import { FaPen } from "react-icons/fa";
import { FaCloud } from "react-icons/fa6";
import { BiSolidCoinStack } from "react-icons/bi";
import { LiaCropSolid } from "react-icons/lia";
function Service() {
  const data = [
    {
      icon: <FaPen className='m-auto' />,
      iconBgCol: '#1980FA',
      title: "Pixel Perfect",
      description: "In at iaculis lorem ipsum. Praesent tempor dictum"
    },
    {
      icon: <FaCloud className='m-auto' />,
      iconBgCol: '#9919FA',
      title: "Cloud Service",
      description: "In at iaculis lorem ipsum. Praesent tempor dictum"
    },
    {
      icon: <LiaCropSolid className='m-auto' />,
      iconBgCol: '#FAA719',
      title: "Vector Editing",
      description: "In at iaculis lorem ipsum. Praesent tempor dictum"
    },
    {
      icon: <BiSolidCoinStack className='m-auto' />,
      iconBgCol: '#19B5FA',
      title: "Export Presets",
      description: "In at iaculis lorem ipsum. Praesent tempor dictum"
    },
  ]
  return (
    <div className='container mx-auto pt-[150px] pb-[70px]'>
      <div className='bg-[#526377] rounded-full h-[70px] w-[70px] flex mb-[40px] mx-auto text-center'>
        <LiaStaylinked className=' text-white text-3xl m-auto' />
      </div>

      <div className='text-center text-[34px] text-[#0f1d46] lg:text-[60px] h2-title font-bold lg:leading-[4rem] mb-[90px]'>Much more <br /> exclusive features</div>


      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-[88%] mx-auto gap-8 pb-10'>
        {
          data.map((item, index) => (
            <div className=' p-[30px] shadow-2xl hover:shadow-black hover:shadow-2xl'>
              <div style={{ backgroundColor: item.iconBgCol }} className={`h-[70px] w-[70px] mx-auto rounded-full flex text-white text-2xl mb-[30px]`}>
                {item.icon}
              </div>
              <div className='text-2xl font-bold text-center h2-title text-[#0F1D46] mb-[15px]'>
                {item.title}
              </div>
              <div className='text-center text-base p-subtitle text-[#0F1D46] opacity-70'>
                {item.description}
              </div>
            </div>
          ))
        }
      </div>
      <div className='bg-red-500'></div>
    </div>




  )
}

export default Service
