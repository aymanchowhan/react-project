import React, { useState } from 'react'
import { IoAirplaneSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const [hoveredQuickLink, setHoveredQuickLink] = useState(null)
  const [hoveredSupportLink, setHoveredSupportLink] = useState(null)

  const QuickLinks = [
    { title: 'Home', link: '/' },
    { title: 'Features', link: '/' },
    { title: 'Pricing', link: '/' },
    { title: 'Team', link: '/' },
    { title: 'Contact Us', link: '/' },
  ]

  const supportLinks = [
    { title: 'Privacy Policy', link: '/' },
    { title: 'Terms', link: '/' },
    { title: 'FAQ', link: '/' },
    { title: 'Support', link: '/' },
  ]

  const SocialLinks = [
    { icon: <FaFacebookF />, link: '/' },
    { icon: <GrTwitter/>, link: '/' },
    { icon: <FaGooglePlusG className='text-2xl'/>, link: '/' },
    { icon: <FaLinkedinIn/>, link: '/' },
  ]

  return (
    <footer className='relative'>
      {/* <div className='footer-bg bg-gradient-to-r from-[#5040F4] to-[#31B4FE] absolute h-full left-0 top-0 right-0 -mt-36'/> */}
      <div className='m-auto container w-[90%] lg:w-[80%] pb-[100px] '>
        <div className='lg:p-[100px] p-[30px] rounded-xl shadow-2xl shadow-blue-500 bg-white'>
          <div className='bg-blue-500 flex mx-auto h-[70px] w-[70px] rounded-full mb-[50px]'>
            <IoAirplaneSharp className='m-auto text-white text-2xl' />
          </div>
          <div className='text-center text-[#0f1d46] h2-title font-bold text-[36px] lg:text-[60px] lg:leading-[4rem] mb-[30px]'>
            Never miss any <br /> update
          </div>
          <div className='lg:flex lg:w-[100%]'>
            <input
              type='email'
              className='lg:w-[75%] w-full lg:mr-[15px] py-[17px] px-[20px] border-2 rounded-lg focus:outline-gray-500 duration-700 mb-[30px] lg:mb-0'
              placeholder='your email'
            />
            <div className='flex lg:w-[25%]'>
              <button className='bg-[#1980FA] w-full rounded-md text-[16px] h2-title duration-500 font-bold text-white hover:shadow-2xl hover:shadow-[#1980FA] mx-auto lg:mx-0 py-[18px]'>
                Pre-Book Your Order
              </button>
            </div>
          </div>
          <div className='text-center p-subtitle text-[#0f1d4670] mt-[30px]'>*Your email address is safe with us. We never share your email address.</div>
        </div>
      </div>




      <div className='bg-gradient-to-r from-[#5040F4] to-[#31B4FE]'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 container m-auto text-white px-10 py-[80px] '>
          <div>
            <div className='h2-title text-center lg:text-left text-[22px] mb-[20px]'>
              About Us
            </div>
            <div className='p-subtitle text-center lg:text-left'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
          </div>
          <div>
            <div className='h2-title text-center lg:text-left text-[22px] mb-[20px]'>
              Quick Link
            </div>
            {
              QuickLinks.map((item, i) =>
                <div key={i} onMouseOver={() => setHoveredQuickLink(i)} onMouseOut={() => setHoveredQuickLink(null)} className='p-subtitle mb-[10px] flex cursor-pointer justify-center items-center lg:justify-start'>
                  <div className={`${hoveredQuickLink == i ? 'w-6 mr-1' : 'w-0'} h-[2px] bg-white duration-300 mt-[15px]`}></div>
                  {item.title}
                </div>
              )
            }
          </div>
          <div>
            <div className='h2-title text-[22px] mb-[20px] text-center lg:text-left'>
              Support
            </div>
            {
              supportLinks.map((item, i) =>
                <div key={i} onMouseOver={() => setHoveredSupportLink(i)} onMouseOut={() => setHoveredSupportLink(null)} className='p-subtitle mb-[10px] flex cursor-pointer justify-center items-center lg:justify-start'>
                  <div className={`${hoveredSupportLink == i ? 'w-6 mr-1' : 'w-0'} h-[2px] bg-white duration-300 mt-[15px]`}></div>
                  {item.title}
                </div>
              )
            }
          </div>
          <div>
            <div className='h2-title text-center lg:text-left text-[22px] mb-[20px]'>
              Social
            </div>
            <div className='p-subtitle mb-[30px] text-center lg:text-left'>Please connect with our social profiles.</div>
            <div className='flex gap-6 justify-center items-center lg:justify-start'>
              {
                SocialLinks.map((item, i) =>
                  <div key={i} className='text-lg my-auto hover:text-[#576EA0] cursor-pointer duration-500 '>
                    {item.icon}
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className='text-center p-subtitle text-white pb-[80px]'>&copy; {new Date().getFullYear()} Ayman's Watch. All Rights Reserved.</div>
      </div>


    </footer>
  )
}

export default Footer
