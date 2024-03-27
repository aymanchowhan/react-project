function ChildComponent({ arrayData, data }) {

    return (
        <>
            <div>{data}</div>
            <div className="flex gap-3">
                {
                    arrayData.map((item, index) =>
                        <div className="bg-blue-400 w-60 rounded-[15px]">
                            <h2 className="text-center">Name</h2>
                            <h1 className="text-center font-bold">{item.name}</h1>
                            <h2 className="text-center mt-5">Designation</h2>
                            <h1 className="text-center font-bold">{item.designation}</h1>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default ChildComponent