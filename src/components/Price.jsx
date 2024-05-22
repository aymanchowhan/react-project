import React from 'react'
import { FaDollarSign } from "react-icons/fa6";
function Price() {
    const data = [
        {
            title: "Regular Plan",
            desc: "No extra hidden charge. All vat Included.",
            price: "$19.99",
        },
        {
            title: "Regular Plan",
            desc: "No extra hidden charge. All vat Included.",
            price: "$19.99",
        },
        {
            title: "Regular Plan",
            desc: "No extra hidden charge. All vat Included.",
            price: "$19.99",
        },
    ]
    return (
        <div className='container mx-auto py-[100px] lg:py-[300px] text-white '>
            <div className='bg-[white] rounded-full h-[70px] w-[70px] flex mb-[30px] mx-auto text-center'>
                <FaDollarSign className=' text-[#3c89e0] text-xl m-auto' />
            </div>

            <div className='text-center text-[34px] text-white lg:text-[60px] h2-title font-bold lg:leading-[4rem] mb-[40px]'>People always loves our product
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 w-[88%] mx-auto gap-8 p-[50px] text-white '>
            {
          data.map((item, index) => (
            <div className=' bg-white p-[50px] shadow-2xl rounded-lg hover:shadow-black hover:shadow-3xl text-white'>
                <div className='mb-[15px] text-center text-[#828b8e]'>
                    1 User
                </div>
              <div className='text-black text-[26px] mb-[30px] text-center h2-title font-bold' >
                {item.title}
              </div>
              <div className='text-[16px] text-center p-subtitle text-[#828b8e] mb-[30px]'>
                {item.desc}
              </div>
              <div className='text-center h2-title text-[60px] text-[#3c89e0] font-extrabold'>
                {item.price}
              </div>
              <div className='text-center mt-[30px]'>
                 <button className='  px-[50px] py-[18px] rounded-md bg-[#576EA0] text-[16px] hover:bg-gradient-to-l hover:from-[#664DD7] hover:to-[#5B96FF] text-white duration-500 h2-title m-auto lg:m-0'>
                        Get Started!
                    </button>
                    </div>
            </div>
          ))
        }
      </div>
    </div>




  )
}
export default Price
