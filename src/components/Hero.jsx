import React from 'react'

function Hero() {
    return (
        <div className='grid grid-cols-2 h-[70vh] pt-56 container m-auto'>
            <div style={{fontSize:'55px'}} className='h-full bg-red-500 leading-[5rem] h2-title text-white' >
           <strong> The best <br />
            landing page for <br />
            your digital <br />
             product.</strong>
         <div style={{fontSize:'20px'}} className="p-subtitle leading-6"> 
                   <p>Our cloud computing platform was built with simplicity <br />
                     so managing infrastructure is easy.</p> 
         </div>
         <div style={{fontSize:'25px'}} className={'h-30 flex justify-between text-white px-10 text-lg py-4 p-12 h2-title'} >
    <button id="myBtn" style={{fontSize:'18px'}} className='relative cursor-pointer hover:bg-blue-600 duration-500 hover:text-white rounded-md p-[20px] my-1'>Discover Now</button>
       </div>
            </div>
        


            <div className='h-full bg-green-500'></div>

        </div>
    )
}

export default Hero
