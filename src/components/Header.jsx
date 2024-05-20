import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const navMenu = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/'
  },
  {
    name: 'Service',
    path: '/'
  },
  {
    name: 'Gallary',
    path: '/'
  },
  {
    name: 'Testimonials',
    path: '/'
  },
  {
    name: 'Price',
    path: '/'
  },
  {
    name: 'Contact',
    path: '/'
  },
]

function Header() {
  const [isHover, setIsHover] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-gradient-to-r from-[#5040F4] to-[#31B4FE]'>
    <div className='container m-auto relative'>
      <div className='h-16 flex justify-between text-white px-10 text-lg py-4'>
        <div className='my-auto'>Ayman's Watch</div>
        <div className='my-auto flex'>
          <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            {
              isOpen ?
              <IoClose className='lg:hidden text-3xl' />
              :
              <RxHamburgerMenu className='lg:hidden text-3xl' />
            }
          </div>
          <div className='hidden lg:block'>
            <div className='flex gap-10'>
              {
                navMenu.map((item, index) =>
                  <div className='relative hover:cursor-pointer' onMouseOut={() => setIsHover(null)} onMouseOver={() => setIsHover(index)}>
                    {item.name}
                    <div className={`${isHover === index ? 'w-[140%]' : 'w-0'} -bottom-[10px] bg-white h-[2px]  absolute left-1/2 transform -translate-x-1/2 duration-300`}></div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
      <div className={`lg:hidden bg-white absolute z-10 left-3 right-3 p-[30px] rounded-md ${isOpen?'block':'hidden'}`}>
        <div className='gap-10'>
          { 
            navMenu.map((item, index) =>
              <div style={{fontSize:'18px'}} className='relative cursor-pointer hover:bg-black duration-500 hover:text-white rounded-md p-[5px] my-1'>
                {item.name}
              </div>
            )
          }
        </div>
      </div>


    </div>
    </div>

  )
}

export default Header