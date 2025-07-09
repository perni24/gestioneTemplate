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
            <div className="flex flex-col items-center w-full border border-gray-400 rounded-lg p-4">
                <p className="">Sei sicuro di voler eliminare il template?</p>
                <div className="flex flex-row justify-around w-full">
                    <button className="btn w-1/6">Si</button>
                    <button className="btn w-1/6" >No</button>
                </div>
            </div>
        </>
    )
}

export default Anteprima