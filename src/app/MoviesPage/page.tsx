import ListaDeFilmes from './components/listaDeFilmes'
import React from 'react';
import { moviesList } from './helpers/api';


//funcao que transforma objeto em componente



export default async function Page1() {



    return (
        <div className="h-[180vh] w-screens backdrop-blur-[8px] bg-black/50 flex flex-col justify-center items-center p-10  gap-4">

            <ListaDeFilmes genero='Drama' />
            <ListaDeFilmes genero='Adventure' />
            <ListaDeFilmes genero='Action' />



        </div>
    );
}
