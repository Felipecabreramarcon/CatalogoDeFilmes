'use client'
import { useQuery } from "@tanstack/react-query"
import { movie } from "../helpers/mockedMovies"

interface SinglePageProps {
    params: { id: number }
}
export default function SinglePage({ params }: SinglePageProps) {
    const { data } = useQuery({
        queryKey: [params],
        queryFn: () => movie(params.id)
    })
    console.log(params)

    return (
        <div className="flex flex-col justify-center items-center gap-10 h-screen bg-black/50">
            <a href='/MoviesPage'><button className="justify-start" >voltar</button></a>
            <div >
                {data?.titleText}
            </div>
            <div>
                <img src={data?.primaryImage}></img>
            </div>
        </div >



    )
}