import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function HomePages() {
    return (
        <>
            <Header />
            <div><Link to={'/about'}>go to about</Link></div>
            <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        </>
    )
}

export default HomePages