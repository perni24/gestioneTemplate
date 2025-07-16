import Anteprima from "../components/anteprima"

function Editor(html) {
    return (
    <>
        <div className="flex flex-row items-center justify-center w-screen h-screen">
            <div><Anteprima html={html} soloAnteprima={true}/></div>
            <div>hello</div>
        </div>
    </>
    )
}

export default Editor