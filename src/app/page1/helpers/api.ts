import axios from 'axios';

// Interface para representar a estrutura dos dados do filme
interface Movie {
    titleText: { text: string };
    releaseYear: { year: number };
    primaryImage: { url: string };
    // Adicione outras propriedades conforme necessário
}

export async function moviesList() {


    const generos = ['Drama', 'Adventure', 'Action']
    const config = {
        headers: {
            'X-RapidAPI-Key': 'f2f7791e62msh73c952b5dffb9fep153034jsnc1301a79eb03',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    }

    try {
        const response = await axios.all(generos.map(g => axios.get('https://moviesdatabase.p.rapidapi.com/titles', { params: { genre: g }, ...config })))
        const movieDataObj: { [genre: string]: { movie: string, image: string }[] } = {};
        console.log(response)
        response.forEach((response, index) => {
            const movies = response.data.results
                .filter((movie: any) => movie.primaryImage && movie.primaryImage.url) // Filtrar filmes com imagem
                .map((movie: any) => ({
                    titleText: movie.titleText.text,
                    releaseYear: movie.releaseYear.year.toString(),
                    primaryImage: movie.primaryImage ? movie.primaryImage.url : '' // Verificar se 'primaryImage' não é null antes de acessar 'url'
                }));

            movieDataObj[generos[index]] = movies;
        });
        return movieDataObj;

    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }//     return {
    //         Drama: [{
    //             titleText: 'rocky',
    //             primaryImage: 'https://br.web.img3.acsta.net/medias/nmedia/18/91/95/32/20171186.jpg',
    //             releaseYear: 2006
    //         },
    //         {
    //             titleText: 'rocky',
    //             primaryImage: 'https://br.web.img3.acsta.net/medias/nmedia/18/91/95/32/20171186.jpg',
    //             releaseYear: 2006
    //         },
    //         {
    //             titleText: 'rocky',
    //             primaryImage: 'https://br.web.img3.acsta.net/medias/nmedia/18/91/95/32/20171186.jpg',
    //             releaseYear: 2006
    //         }],
    //         Action: [{
    //             titleText: 'rocky 2',
    //             primaryImage: 'https://play-lh.googleusercontent.com/TI9nse41ytOyltfqzcZDNqEMh_FgUhLVp-ZQ8g4ZcoWBBFgpyJon5fO8pfQgschmlwBMUvh_CNDa3U3XIBY',
    //             releaseYear: 2006
    //         },
    //         {
    //             titleText: 'rocky 2',
    //             primaryImage: 'https://play-lh.googleusercontent.com/TI9nse41ytOyltfqzcZDNqEMh_FgUhLVp-ZQ8g4ZcoWBBFgpyJon5fO8pfQgschmlwBMUvh_CNDa3U3XIBY',
    //             releaseYear: 2006
    //         },
    //         {
    //             titleText: 'rocky 2',
    //             primaryImage: 'https://play-lh.googleusercontent.com/TI9nse41ytOyltfqzcZDNqEMh_FgUhLVp-ZQ8g4ZcoWBBFgpyJon5fO8pfQgschmlwBMUvh_CNDa3U3XIBY',
    //             releaseYear: 2006
    //         }
    //         ],

    //         Adventure: [{
    //             titleText: 'rocky 3',
    //             primaryImage: 'https://upload.wikimedia.org/wikipedia/en/5/53/Rocky_balboa.jpeg',
    //             releaseYear: 2006
    //         },
    //         {
    //             titleText: 'rocky 3',
    //             primaryImage: 'https://upload.wikimedia.org/wikipedia/en/5/53/Rocky_balboa.jpeg',
    //             releaseYear: 2006
    //         },
    //         {
    //             titleText: 'rocky 3',
    //             primaryImage: 'https://upload.wikimedia.org/wikipedia/en/5/53/Rocky_balboa.jpeg',
    //             releaseYear: 2006
    //         }
    //         ]
    //     }

    // }
    return null
}
