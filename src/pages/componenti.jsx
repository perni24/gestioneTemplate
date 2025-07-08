import React, { useState, useEffect } from 'react';
import Tabella from '../components/tabella';

function Componenti() {

    const [dati, setDati] = useState([]);
    const colonne = ["id", "tag", "dataCreazione"]

    useEffect(() => {
        fetch('/componenti.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => setDati(data))
            .catch(err => {
                console.error('Errore caricamento JSON:', err);
            });
    }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center w-screen h-screen space-y-6 ">
                <div className='flex items-center w-5/6 h-3/4'>
                    <Tabella dati={dati} colonne={colonne} />
                </div>
            </div>
        </>
    )
}
export default Componenti
