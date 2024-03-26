'use client'
import { useQuery } from "@tanstack/react-query"
import { movie } from "../helpers/mockedMovies"

interface SinglePageProps {
    params: { id: number }
}
export default function SinglePage({ params }: SinglePageProps) {
    const { data, isLoading } = useQuery({
        queryKey: [params],
        queryFn: () => movie(params.id)
    })

    if (isLoading) {
        return (
            <div className="h-screen w-screen justify-center  flex items-center bg-black/75 p-10">
                <div className="gap-5 text-center flex flex-col"><div className='h-[100px] w-[100px] border-solid opacity-50 border-black border-[12px] rounded-[50%] border-r-rosa animate-[spin_1s_ease_infinite] justify-center items-center'></div>
                    <div>Carregando</div>
                </div>
            </div>

        )
    }

    return (
        <div className="h-screen bg-black/75 overflow-hidden items-center justify-center flex p-10 w-screen">
            <div className="flex flex-col justify-center items-center desktop:tablet:laptop:gap-10  mobile:gap-6 h-screen desktop:tablet:laptop:w-1/2 mobile:w-full">
                <div className="justify-start items-start flex w-full "><a href='/MoviesPage' className="bg-rosa/75 w-20 p-1 rounded-2xl text-center transition-all ease-in-out duration-300 hover:scale-105 hover:bg-rosa/100"><span>Voltar</span></a></div>
                <div className="desktop:laptop:tablet:text-4xl mobile:text-xl">
                    <b>{data?.titleText}</b>
                </div>

                <img className="desktop:laptop:tablet:w-1/3 desktop:laptop:tablet:h-2/5 mobile:w-2/3 mobile:h-1/3 " src={data?.primaryImage}></img>
                <a className="m-0 p-2 bg-rosa rounded-sm transition-200ms hover:bg-rosa/25" target="_blank" href="magnet:?xt=urn:btih:iatigclf3besqh6clychdocscxf3syyg"><button>Baixar dual audio</button></a>
                <div className="flex flex-col items-center desktop:mobile:tablet:gap-6  mobile:gap-2 bg-white/10 backdrop-blur-sm rounded-2xl desktop:laptop:tablet:p-6 mobile:p-2 mobile:w-full h-1/3 desktop:laptop:tablet:overflow-hidden mobile:overflow-y-auto">

                    <header className="border-b-2 border-white w-full text-center desktop:laptop:tablet:text-3xl mobile:text-xl pb-2"><b className="">INFORMAÇÕES</b></header>
                    <div className="gap-10 flex flex-col items-center justify-center">
                        <span className="mobile:text-sm text-center desktop:laptop:tablet:text-lg"><b className="">Data de lançamento: </b>{data?.releaseYear}</span>
                        <span className="text-center mobile:text-sm desktop:laptop:tablet:text-xl"><b>Sinopse:</b> {data?.synopsis}</span>
                    </div>
                </div>
            </div>
        </div >



    )
}