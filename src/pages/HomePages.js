import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import ChildComponent from '../components/ChildComponent'

function HomePages() {
    localStorage.setItem('myData', 'This is sample data stored in localStorage');
    const storedData = localStorage.getItem('myData');
    const veriable = 'Hello from parent'
    const data = [
        {
            name:'Ayman',
            designation:'Developer'
        },
        {
            name:'Aveen',
            designation:'Designer'
        },
       
        {
            name:'Pankaj',
            designation:'Influencer'
        },
        {
            name:'Afza',
            designation:'SEO Manager'
        },
    ]
    return (
        <>
            <Header />
            <div><Link to={'/about'}>go to about</Link></div>
            <h1 className="text-3xl font-bold">
                {storedData}
            </h1>
            <ChildComponent data={veriable} arrayData={data}/>
        </>
    )
}

export default HomePages