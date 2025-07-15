import { Outlet } from "react-router-dom"
import ButtonLink from "./components/buttonLink"

function App() {
  return (
    <>
      <div className="w-screen h-24 bg-gray-700 absolute flex items-center">
        <div className="w-1/14 m-2"><ButtonLink to={"/"} testo={"Home"}/></div>
      </div>
      <main>
        <Outlet /> {/* Qui vengono renderizzate Home, Template, Componenti */}
      </main>
    </>
  )
}

export default App