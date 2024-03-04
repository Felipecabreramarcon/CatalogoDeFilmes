
import React from 'react';
import { moviesList } from './helpers/api';

function transformObjectIntoComponent(moviesObject: any, index: number) {
    return <div key={index} className='flex-shrink-0 mx-2 w-80 p-10 flex flex-col items-center' >
        <div className='m-auto text-2xl' >{moviesObject.titleText}</div>
        <div> <img className='h-80 w-80' src={moviesObject.primaryImage as string} /></div>

    </div >
}

export default async function Page1() {
    let moviesDrama;

    let moviesAdventure;
    let moviesAction;

    const moviesL: any = await moviesList()
    if (moviesL) {
        moviesDrama = moviesL.Drama.map(transformObjectIntoComponent)
        moviesAdventure = moviesL.Adventure.map(transformObjectIntoComponent)
        moviesAction = moviesL.Action.map(transformObjectIntoComponent)
    } else {
        moviesDrama = []
        moviesAdventure = []
        moviesAction = []
    }

    console.log(moviesL.Drama)

    return (
        <div className="h-[170vh] w-screens backdrop-blur-[8px] bg-black/50 flex flex-col justify-center items-center p-10  ">
            {/* Renderizar o componente MoviesApi */}

            <div className='flex flex-col w-full h-2/5' >
                <h1 className='justify-start font-bold text-3xl	'>Drama</h1>
                <div className='flex flex-row overflow-x-hidden '>{moviesDrama}</div>
            </div>
            <div className='flex flex-col w-full h-2/5' >
                <h1 className='justify-start font-bold text-3xl	'>Adventure</h1>
                <div className='flex flex-row overflow-x-hidden'>{moviesAdventure}</div>
            </div>
            <div className='flex flex-col w-full h-2/5' >
                <h1 className='justify-start font-bold text-3xl	'>Adventure</h1>
                <div className='flex flex-row overflow-x-hidden'>{moviesAction}</div>
            </div>


        </div>
    );
}
