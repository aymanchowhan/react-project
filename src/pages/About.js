import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <Header/>
    <div>This is <Link to={'/'}> Go to Home </Link>Page</div>
    </>
  )
}

export default About