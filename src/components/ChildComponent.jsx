import { useState } from "react";

function ChildComponent({ arrayData, sampleText }) {
    const [storedData, setStoredData] = useState(null);
    var localData = localStorage.getItem('localKey');
    setTimeout(() => {
        setStoredData(localData);
    }, 3000);
 
    return (
        <>
            <strong>{sampleText}</strong>
            <div className="flex gap-3">
                {
                     arrayData&&arrayData.map((item, index) =>
                        <div className="bg-blue-400 w-60 rounded-[15px]">
                            <h2 className="text-center">Name</h2>
                            <h1 className="text-center font-bold">{item.title}</h1>
                            <h2 className="text-center mt-5">Designation</h2>
                            <h1 className="text-center font-bold">{item.url}</h1>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default ChildComponent