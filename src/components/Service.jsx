import React from 'react'
import { LiaStaylinked } from "react-icons/lia";
import { FaPen } from "react-icons/fa";
import { FaCloud } from "react-icons/fa6";
import { TbVectorOff } from "react-icons/tb";
import { BiSolidCoinStack } from "react-icons/bi";
function Service() {
  const data = [
    {
      icon: <FaPen className=' text-white text-sm m-auto bg-[#1980FA] rounded-full h-[70px] w-[70px] flex mb-[20px] mx-auto text-center' />,
      title: "Pixel Perfect",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit! Quia"
    },
    {
      icon: <FaCloud  className=' text-white text-sm m-auto bg-[#9919fa] rounded-full h-[70px] w-[70px] flex mb-[20px] mx-auto text-center'/>,
      title: "Cloud Service",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit! Quia"
    },
    {
      icon: <TbVectorOff className=' text-white text-sm m-auto bg-[#faa719] rounded-full h-[70px] w-[70px] flex mb-[20px] mx-auto text-center' />,
      title: "Vector Editing",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit! Quia"
    },
    {
      icon: <BiSolidCoinStack className=' text-white text-sm m-auto bg-[#19b5fa] rounded-full h-[70px] w-[70px] flex mb-[20px] mx-auto text-center' />,
      title: "Export Presets",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit! Quia"
    },
  ]
  return (
    <div className='container mx-auto'>
      <div className='bg-[#1980FA] rounded-full h-[70px] w-[70px] flex mb-[40px] mx-auto text-center'>
        <LiaStaylinked className=' text-white text-3xl m-auto' />
      </div>
      <div className='text-center text-[36px] h2-title font-bold'>Much more Exclusive features</div>


      <div className='grid grid-cols-4 w-[992px] h-[45vh] px-[15px] mx-auto gap-12'>
        {
          data.map((item, index) => (
            <div className='bg-white'>
              <div>
                {item.icon}
              </div>
              <div>
                {item.title}
              </div>
              <div>
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
