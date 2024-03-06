'use client'


export default function listaDeFilmes(props: any) {
    function transformMovieIntoComponent(moviesObj: any, index: number) {

        return (
            <div key={index} className='flex-shrink-0 mx-2 w-80 p-10 flex flex-col items-center gap-y-10 overflow-x-hidden transition-transform ' >
                <div className=' m-auto text-xs  justify-center items-center' >{moviesObj.titleText}</div>
                <div> <img className='h-[30vh] w-[50vw] ease-in-out duration-500 hover:scale-125 ' src={moviesObj.primaryImage as string} /></div>
            </div >
        )
    }

    const lista = props.lista
    const genero = props.genero
    const listaMapped = lista.map(transformMovieIntoComponent)

    let divfilme = <div className='flex flex-row overflow-x-hidden transition-transform'>{listaMapped}</div>

    return (
        <div className='flex flex-col w-[90vw] h-2/5 ' >
            <h1 className='justify-start font-bold text-3xl mb-4'>{genero}</h1>
            {divfilme}

        </div>)


}