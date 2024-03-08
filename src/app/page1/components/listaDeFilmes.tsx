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
        items: 5,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};

interface ListaDeFilmesProps {
    genero: string
}

export default function listaDeFilmes({ genero }: ListaDeFilmesProps) {

    function transformMovieIntoComponent(moviesObj: any, index: number) {

        return (
            <div key={index} className='flex-shrink-0 mx-2 w-80 p-10 flex flex-col items-center gap-y-10  justify-center' >
                <div className=' text-xs h-6  m-auto' >{moviesObj.titleText}</div>
                <div> <img className='h-[30vh] w-56  ease-in-out duration-500 hover:scale-125  ' src={moviesObj.primaryImage as string} /></div>
            </div >
        )
    }

    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: [genero],
        queryFn: () => moviesList(genero)
    })

    const lista = data || []
    const listaMapped = lista.map(transformMovieIntoComponent)


    let divfilme = <Carousel swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true}
        infinite={false}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
        className='as w-[85vw] items-center'
        centerMode={false}
    >{listaMapped}</Carousel >

    return (
        <div className='flex flex-col w-[90vw] h-2/5 ' >
            <h1 className=' justify-start font-bold text-3xl mb-4'>{genero}</h1>
            {divfilme}

        </div >)


}