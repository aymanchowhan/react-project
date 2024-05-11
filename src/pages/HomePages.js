import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import ChildComponent from '../components/ChildComponent'
import TernoryAndUseState from '../components/TernoryAndUseState';
import axios from 'axios';

function HomePages() {

    const [fetchData, setFetchData] = useState(null);
    const [id, setId] = useState(1);
    const [perticularData, setPerticularData] = useState(null);
    // localStorage.setItem('localKey', 'This is sample data stored in localStorage');

    // setTimeout(() => {
    // localStorage.getItem('localKey', 'This is sample data stored in localStorage which is changed after 2 seconds');
    // }, 3000);
    // const sample = 'List of friends with there designations';
    // const data = [
    //     {
    //         name:'Ayman',
    //         designation:'Developer'
    //     },
    //     {
    //         name:'Aveen',
    //         designation:'Designer'
    //     },
    //     {
    //         name:'Pankaj',
    //         designation:'Influencer'
    //     },
    //     {
    //         name:'Afza',
    //         designation:'SEO Manager'
    //     },
    // ]





    useEffect(() => {
        const fetching = async () => {
            try {
                const ressponse = await axios.get('https://jsonplaceholder.typicode.com/photos');
                setFetchData(ressponse.data);
            } catch (error) {
                console.log('this is my error', error);
            }
        }
        // fetch('https://jsonplaceholder.typicode.com/photos')
        //   .then((res) => {
        //     return res.json();
        //   })
        //   .then((data) => {
        //     setFetchData(data);
        //   });
        fetching();
    }, []);


    useEffect(() => {
        const fetching = async () => {
            try {
                const ressponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                setPerticularData(ressponse.data);
            } catch (error) {
                console.log('this is my error', error);
            }
        }
        fetching();
    }, [id]);


    //   console.log('this is my finalized data which is stored in variable', fetchData);


    return (
        <>
            <Header />
            {/* <div><Link to={'/about'}>go to about</Link></div> */}
            {/* <h1 className="text-3xl font-bold">
                {storedData}
            </h1> */}
            <ChildComponent sampleText={'hey'} arrayData={fetchData} />
            {/*
            <TernoryAndUseState/> */}

            <div>This is perticular data of Id {id}</div>
            {
                perticularData &&
                <div>
                    <h1>Title: {perticularData.title}</h1>
                    <h2>Body: {perticularData.body}</h2>
                </div>
            }
            <input
            className='border-2 border-gray-500 w-1/2 h-10 rounded-md p-2 mt-5'
             type="text"
             value={id}
                onChange={(e) => setId(e.target.value)}
             />
        </>
    )
}

export default HomePages