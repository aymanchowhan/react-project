import React, { useState } from 'react'

function TernoryAndUseState() {
    const isPassed = true;
    const [state, setState] = useState(null)
    // console.log('this is my state', state)

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 3000);

    console.log(isLoading)

    return (
        <>
            {/* {condition ? true : false} */}
            <div className={`${isPassed ? 'text-green-600' : 'text-red-600'}`}>
                {isPassed ? 'Ayman is passed' : 'Ayman is not passed'}
                {state}
            </div>
            <button onClick={() => setState(state + 1)} className='border-2 border-black p-2 rounded-xl mt-4'>Increment</button>

            <div>
                {isLoading ? 'loading...' : 'Data'}
            </div>
        </>
    )
}

export default TernoryAndUseState