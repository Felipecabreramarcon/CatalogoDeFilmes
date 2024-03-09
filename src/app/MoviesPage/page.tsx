import MoviesCatalog from './components/MoviesCatalog'
import React from 'react';

export default function MoviesPage() {

    return (
        <div className="h-[180vh] w-screen  overflow-hidden backdrop-blur-[8px] bg-black/50 flex flex-col justify-center items-center desktop:p-10 laptop:p-10 mobile:p-14 gap-4">
            <MoviesCatalog genre='Drama' />
            <MoviesCatalog genre='Adventure' />
            <MoviesCatalog genre='Action' />
        </div>
    );
}
