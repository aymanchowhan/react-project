import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'

function LandingPage() {
  return (
    <div className='relative'>
      <div className='fixed z-10 left-0 right-0'>
        <Header />
      </div>
      <div className='hero-bg bg-gradient-to-r from-[#5040F4] to-[#31B4FE] h-[140vh]'>
        <Hero />
      </div>
      <About />
    </div>
  )
}

export default LandingPage