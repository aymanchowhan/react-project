import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Service from '../components/Service'
import { About2 } from '../components/About2'
import Service2 from '../components/Service2'
import Contact from '../components/Contact'
import Price from '../components/Price'
import Gallary from '../components/Gallary'
import Testimonial from '../components/Testimonial'
function LandingPage() {
  return (
    <><div className='relative'>
      <div className='fixed z-10 left-0 right-0'>
        <Header />
      </div>
      <div className='hero-bg bg-gradient-to-r from-[#5040F4] to-[#31B4FE] h-[180vh] lg:h-[140vh]'>
        <Hero />
      </div>
      <About />
      <About2 />
      <Service />
      <div className='servic-bg bg-gradient-to-r from-[#5040F4] to-[#31B4FE]'>
        <Service2 />
      </div>
      <div>
        <Gallary />
       </div>
       <div>
        <Testimonial />
       </div>
      <div>
        <Price />
      </div>
    </div>
    <div>
      <Contact/>
    </div>
    </>
  )
}

export default LandingPage 