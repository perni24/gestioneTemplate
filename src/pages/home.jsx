function Home({ setPagina }){
    return (
        <>
        <div className="flex flex-col items-center justify-center w-screen h-screen space-y-6 ">
            <button className='btn w-1/4' onClick={() => setPagina(1)}>Template</button>
            <button className='btn w-1/4' onClick={() => setPagina(2)}>Componenti</button>
        </div>
        </>
    )
}

export default Home