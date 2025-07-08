function Anteprima(html){
    return(
        <>
            <div className="flex flex-col justify-items-center w-full h-full overflow-hidden">
                <div className="w-5/6 h-full bg-gray-200 overflow-y-auto p-4">

                </div>
                <div className="flex w-full justify-around mb-4">
                    <button className="btn w-1/6">Editor</button>
                    <button className="btn w-1/6">Scarica</button>
                    <button className="btn w-1/6">Elimina</button>
                </div>
            </div>
        </>
    )
}

export default Anteprima