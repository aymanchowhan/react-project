import React from 'react'
import { useParams } from "react-router-dom";

function SlugPage() {
    const { title } = useParams();
    return (
        <div>
           This is title <br/>
            <span className='font-bold text-2xl'>{title}</span>
            <p>This is page's content.</p>
        </div>
    )
}

export default SlugPage
