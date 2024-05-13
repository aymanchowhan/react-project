import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

function LandingPage() {
  return (
    <div>
      <div className='fixed z-10 left-0 right-0'>
        <Header />
      </div>
      <div className='hero-bg bg-gradient-to-r from-[#5040F4] to-[#31B4FE] h-[140vh]'>
        <Hero />
      </div>
    </div>
  )
}

export default LandingPage