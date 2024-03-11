'use client'
import { useQuery } from '@tanstack/react-query';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { moviesList } from '../helpers/mockedMovies';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};

interface MoviesCatalogProps {
    genre: string
}

//Rota Dinâmica para single page
export function handleclick(id: number) {
    window.location.href = 'MoviesPage/' + id
}

export default function MoviesCatalog({ genre }: MoviesCatalogProps) {

    function transformMovieIntoComponent(moviesObj: any) {
        return (
            <div className='flex-shrink-0 mx-2 desktop:laptop:tablet:mobile:h-[52vh] desktop:tablet:laptop:w-80 mobile:w-30 p-10 flex flex-col items-center desktop:laptop:tablet:gap-y-12  mobile:gap-y-8 desktop:justify-center mobile:items-start mobile:justify-start' >
                <div className=' desktop:tablet:laptop:text-lg mobile:text-sm h-6 desktop:laptop:tablet:w-[12vw] mobile:w-[30vw] text-center' >{moviesObj.titleText}</div>
                <div> <img onClick={() => handleclick(moviesObj.id)} className='desktop:laptop:tablet:h-[30vh] desktop:laptop:tablet:w-[12vw] mobile:h-[20vh] mobile:w-[30vw] ease-in-out duration-500 hover:scale-125 hover:translate-y-6  ' src={moviesObj.primaryImage as string} /></div>
            </div >
        )
    }

    const { data, isLoading } = useQuery({
        queryKey: [genre],
        queryFn: () => moviesList(genre)
    })

    const movies = data || []
    const mappedMovies = movies.map(transformMovieIntoComponent)

    if (isLoading) {
        return (
            <div className='flex flex-col w-[90vw] h-2/5 mobile:items-center desktop:items-start' >
                <h1 className=' desktop:justify-start mobile:justify-center mobile:items-center font-bold text-3xl mb-4'>{genre}</h1>
                <div className='w-full h-full flex items-center justify-center'>
                    <div className='h-[100px] w-[100px] border-solid opacity-50 border-black border-[12px] rounded-[50%] border-r-rosa animate-[spin_1s_ease_infinite] justify-center items-center'></div>
                </div>
            </div >
        )
    }


    return (
        <div className='flex flex-col desktop:w-[90vw] mobile:w-screen h-2/5 mobile:items-center desktop:items-start'  >
            <h1 className=' desktop:justify-start font-bold text-3xl mb-4'>{genre}</h1>
            <Carousel
                swipeable={true}
                draggable={false}
                responsive={responsive}
                ssr={false}
                infinite={false}
                customTransition="transform 300ms ease-in-out"
                containerClass=""
                dotListClass="custom-dot-list-style"
                className='carousel w-[86vw] items-start'
                centerMode={false}
                itemClass="carousel-item flex items-center justify-center "
            >{mappedMovies}</Carousel >

        </div >)


}