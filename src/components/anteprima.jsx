import { useState } from "react"
import Scarica from "./scarica"

function Anteprima({html, soloAnteprima}) {
    const [modaleElimina, setModaleElimina] = useState(false)
    return (
        <>
            <div className="flex flex-col items-center w-full h-full overflow-hidden">
                <div className="flex flex-col items-center w-full h-full overflow-y-auto bg-black">
                    <iframe
                        className="w-3/4 h-full bg-gray-100 overflow-y-auto"
                        srcDoc={html.html}
                        sandbox="allow-same-origin allow-scripts"
                        title="Anteprima"
                    />
                </div>
                <div className="flex flex-row-reverse w-full justify-around m-4" hidden={soloAnteprima}>
                    <button className="btn w-1/6">Modifica</button>
                    <div className="w-1/6"><Scarica/></div>
                    <button className="btn w-1/6" onClick={() => setModaleElimina(true)}>Elimina</button>
                </div>
            </div>
            <div className=" absolute inset-0 flex items-center justify-center bg-black/50" hidden={!modaleElimina}>
                <div className="flex flex-col items-center bg-gray-700 border border-gray-400 rounded-lg p-4 w-2/6 ">
                    <p className="p-10 text-white">Sei sicuro di voler eliminare il template?</p>
                    <div className="flex flex-row justify-around w-full">
                        <button className="btn w-1/6">Si</button>
                        <button className="btn w-1/6"  onClick={() => setModaleElimina(false)}>No</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Anteprima