import MoviesCatalog from './components/MoviesCatalog'
import React from 'react';

export default function MoviesPage() {

    return (
        <div className="h-[180vh] w-screens backdrop-blur-[8px] bg-black/50 flex flex-col justify-center items-center p-10  gap-4">
            <MoviesCatalog genre='Drama' />
            <MoviesCatalog genre='Adventure' />
            <MoviesCatalog genre='Action' />
        </div>
    );
}
