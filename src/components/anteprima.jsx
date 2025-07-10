
function Anteprima(html) {
    return (
        <>
            <div className="flex flex-col items-center w-full h-full overflow-hidden">
                <div className="w-full h-full overflow-y-auto">
                    <iframe
                        className="w-full h-full bg-white"
                        srcDoc={html.html}
                        sandbox="allow-same-origin allow-scripts"
                        title="Anteprima"
                    />
                </div>
                <div className="flex flex-row-reverse w-full justify-around m-4">
                    <button className="btn w-1/6">Modifica</button>
                    <button className="btn w-1/6">Scarica</button>
                    <button className="btn w-1/6">Elimina</button>
                </div>
            </div>
            <div className=" absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="flex flex-col items-center bg-gray-700 border border-gray-400 rounded-lg p-4 w-2/6 ">
                    <p className="p-10 text-white">Sei sicuro di voler eliminare il template?</p>
                    <div className="flex flex-row justify-around w-full">
                        <button className="btn w-1/6">Si</button>
                        <button className="btn w-1/6" >No</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Anteprima