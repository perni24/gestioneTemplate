import { useState } from "react"
import Home from "./pages/home"
import Template from "./pages/template"
import Componenti from "./pages/componenti"

function App() {
  const [pagina, setPagina] = useState(0)

  const navigazione = () => {
    switch (pagina) {
      case 0:
        return <Home setPagina={setPagina}/>
      case 1:
        return <Template/>
      case 2:
        return <Componenti/>
    }
  }
  return (
    <>
      <div className="w-screen h-24 bg-gray-700 absolute flex items-center">
        <button className="btn w-1/14 m-2" onClick={() => setPagina(0)}>Home</button>
      </div>
      {navigazione() /* serve per aggiornare il valore di navigazione */}
    </>
  )
}

export default App