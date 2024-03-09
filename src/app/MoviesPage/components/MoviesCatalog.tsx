'use client'
import { useQuery } from '@tanstack/react-query';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { moviesList } from '../helpers/api';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6.2,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};

interface MoviesCatalogProps {
    genre: string
}

export default function MoviesCatalog({ genre }: MoviesCatalogProps) {

    function transformMovieIntoComponent(moviesObj: any, index: number) {

        return (
            <div key={index} className='flex-shrink-0 mx-2 w-80 p-10 flex flex-col items-center gap-y-10 justify-center mobile:items-start mobile:justify-start' >
                <div className=' text-xs h-6 m-auto' >{moviesObj.titleText}</div>
                <div> <img className='desktop:h-[30vh] desktop:w-56 mobile:h-[20vh] mobile:w-[30vw] ease-in-out duration-500 hover:scale-125  ' src={moviesObj.primaryImage as string} /></div>
            </div >
        )
    }

    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: [genre],
        queryFn: () => moviesList(genre)
    })

    const list = data || []
    const MappedList = list.map(transformMovieIntoComponent)

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

    let divMovie = <div className=''><Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true}
        infinite={false}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        className='carousel w-[86vw] items-center'
        centerMode={false}
    >{MappedList}</Carousel ></div>

    return (
        <div className='flex flex-col w-[90vw] h-2/5 mobile:items-center desktop:items-start'  >
            <h1 className=' desktop:justify-start font-bold text-3xl mb-4'>{genre}</h1>
            {divMovie}

        </div >)


}