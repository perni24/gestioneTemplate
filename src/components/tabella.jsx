import { useState } from "react"
import Anteprima from "./anteprima"
import ButtonLink from "./buttonLink"

function Tabella({ dati, colonne }) {
   const [modale, setModale] = useState(false)
   const [select, setSelect] = useState(null)
   const coll = colonne.length

    return (
        <>
            <div className="w-full rounded-lg overflow-hidden border border-gray-400" hidden={modale}>
                <table className="w-full border-collapse border-gray-400" >
                    <thead className=" bg-blue-400">
                        <tr>
                            {colonne.map((item, key) => (
                                <th key={key} className="p-2 ">{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tfoot> 
                        <tr>
                           <td colSpan={coll}><ButtonLink to={"/editor"} testo={"+"}/></td>
                        </tr>
                    </tfoot>
                    <tbody className="">
                        {dati.map((item, key) => (
                            <tr key={key} className="text-white hover:bg-gray-300 cursor-pointer hover:text-black" onClick={() => {setModale(true); setSelect(item.html)}}>
                                {colonne.map((colonna, colIndex) => (
                                    <td key={colIndex} className="text-center align-middle p-2">{item[colonna]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col w-full h-full rounded-lg overflow-hidden border border-gray-400" hidden={!modale}>
                <button className="btn text-lg" onClick={() => setModale(false)}>x</button>
                <Anteprima html={select}/>
            </div>
        </>
    )
}
export default Tabella 