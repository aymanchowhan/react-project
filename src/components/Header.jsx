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
  console.log(isOpen)
  console.log(isHover)
  return (
    <div className='container m-auto'>
      <div className='h-16 bg-slate-700 flex justify-between text-white px-10 text-lg mt-4'>
        <div className='my-auto'>Ayman's Watch</div>
        <div className='my-auto flex'>
          <div onClick={() => setIsOpen(!isOpen)}>
            {
              !isOpen ?
                <RxHamburgerMenu className='lg:hidden text-3xl' />
                :
                <IoClose className='lg:hidden text-3xl' />
            }
          </div>
          <div className='hidden lg:block'>
            <div className='flex gap-10'>
              {
                navMenu.map((item, index) =>
                  <div className='relative hover:cursor-pointer' onMouseOut={() => setIsHover(null)} onMouseOver={() => setIsHover(index)}>
                    {item.name}
                    <div className={`${isHover == index ? 'w-[140%]' : 'w-0'} -bottom-[10px] bg-white h-[2px]  absolute left-1/2 transform -translate-x-1/2 duration-300`}></div>
                  </div>
                )
              }
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Header