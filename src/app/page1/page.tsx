import ListaDeFilmes from './components/listaDeFilmes'
import React from 'react';
import { moviesList } from './helpers/api';


//funcao que transforma objeto em componente



export default async function Page1() {
    //declara objetos para cada filme
    let moviesDrama;
    let moviesAdventure;
    let moviesAction;



    //declara e popula objeto retornado pela API
    const moviesL: any = await moviesList()
    //se moviesL != de null entao popula os 3 objetos e os transformam em componentes
    if (moviesL) {
        moviesDrama = moviesL.Drama
        moviesAdventure = moviesL.Adventure
        moviesAction = moviesL.Action
    } else {
        moviesDrama = []
        moviesAdventure = []
        moviesAction = []
    }



    return (
        <div className="h-[180vh] w-screens backdrop-blur-[8px] bg-black/50 flex flex-col justify-center items-center p-10  gap-4">

            <ListaDeFilmes lista={moviesDrama} genero='Drama' />
            <ListaDeFilmes lista={moviesAdventure} genero='Adventure' />
            <ListaDeFilmes lista={moviesAction} genero='Action' />



        </div>
    );
}
