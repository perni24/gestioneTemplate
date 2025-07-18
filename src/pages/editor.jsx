import Anteprima from "../components/anteprima"
import { useLocation } from 'react-router-dom' // serve per recuperare i dati passati con router

function Editor() {
    const location = useLocation()
    const {html, idTempalte} = location.state || {html: null, idTempalte: null}
    return (
    <>
        <div className="flex flex-row items-center justify-center w-screen h-screen">
            <div className="w-2/6 h-3/4 bg-gray-100">{html}</div>
            <div className="w-1/6"></div>
            <div className="w-2/6 h-3/4">
                <Anteprima html={html} soloAnteprima={true}/>
            </div>
        </div>
    </>
    )
}

export default Editor