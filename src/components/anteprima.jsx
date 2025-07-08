function Anteprima(html){
    return(
        <>
            <div className="flex flex-col items-center w-full h-full overflow-hidden">
                <div className="w-full h-full bg-gray-200 overflow-y-auto p-4">

                </div>
                <div className="flex flex-row-reverse w-full justify-around m-4">
                    <button className="btn w-1/6">Modifica</button>
                    <button className="btn w-1/6">Scarica</button>
                    <button className="btn w-1/6">Elimina</button>
                </div>
            </div>
        </>
    )
}

export default Anteprima