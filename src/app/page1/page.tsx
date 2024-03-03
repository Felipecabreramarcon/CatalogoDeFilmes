'use client'
import React, { useEffect, useState } from 'react';
import MoviesApi from './components/api'; // Importe o componente moviesApi aqui

export default function Page1() {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        // Não precisa mais chamar MoviesApi() aqui
    }, []);

    return (
        <div className="h-screen w-screen backdrop-blur-[8px] bg-black/50 flex flex-col justify-center items-center p-8 ">
            {/* Renderizar o componente MoviesApi */}
            <MoviesApi />
            <div className='flex flex-col w-full h-2/5' >
                <h1 className='justify-start'>Drama</h1>
                <div>

                </div>
            </div>
            <div className='flex flex-col w-full h-2/5' >
                <h1 className='justify-start'>Adventure</h1>
                <div>

                </div>
            </div>



        </div>
    );
}
