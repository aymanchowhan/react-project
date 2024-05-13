import React from 'react'

function Hero() {
    return (
        <div className='grid grid-cols-2 h-[70vh] pt-56 container m-auto'>
            <div className='h-full bg-red-500'>
                The best
                landing page for
                your digital product.

                Our cloud computing platform was built with simplicity
                so managing infrastructure is easy.
            </div>
            <div className='h-full bg-green-500'></div>

        </div>
    )
}

export default Hero
