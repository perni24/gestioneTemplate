function Tabella({ dati, colonne }) {

    return (
        <>
            <div className="w-full rounded-lg overflow-hidden border border-gray-400">
                <table className="w-full border-collapse border-gray-400">
                    <thead className=" bg-blue-400">
                        <tr>
                            {colonne.map((item, key) => (
                                <th key={key} className="p-2 ">{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="">
                        {dati.map((item, key) => (
                            <tr key={key} className="text-white hover:bg-gray-300 cursor-pointer hover:text-black">
                                {colonne.map((colonna, colIndex) => (
                                    <td key={colIndex} className="text-center align-middle p-2">{item[colonna]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="w-full">
                <button className="btn">nuovo</button>
            </div>
        </>
    )
}
export default Tabella 