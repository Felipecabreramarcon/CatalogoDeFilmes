import axios from 'axios';

// Interface para representar a estrutura dos dados do filme
interface Movie {
    titleText: { text: string };
    releaseYear: { year: number };
    primaryImage: { url: string };
}

export async function moviesList(genero: string): Promise<Movie[]> {

    const config = {
        headers: {
            'X-RapidAPI-Key': 'f2f7791e62msh73c952b5dffb9fep153034jsnc1301a79eb03',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    }

    try {
        const response = await (axios.get('https://moviesdatabase.p.rapidapi.com/titles', { params: { genre: genero }, ...config }))

        return response.data.results
            .filter((movie: any) => movie.primaryImage && movie.primaryImage.url) // Filtrar filmes com imagem
            .map((movie: any) => ({
                titleText: movie.titleText.text,
                releaseYear: movie.releaseYear.year.toString(),
                primaryImage: movie.primaryImage ? movie.primaryImage.url : '' // Verificar se 'primaryImage' não é null antes de acessar 'url'
            }));

    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return []
    }

}
