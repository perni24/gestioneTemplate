import ButtonLink from "../components/buttonLink"

function Home({ setPagina }){
    return (
        <>
        <div className="flex flex-col items-center justify-center w-screen h-screen space-y-6 ">
            <div className="w-1/4"><ButtonLink to={"/template"} testo={"Template"}/></div>
            <div className="w-1/4"><ButtonLink to={"/componenti"} testo={"Componenti"}/></div>
        </div>
        </>
    )
}

export default Home