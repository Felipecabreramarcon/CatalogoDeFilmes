import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Interface para representar a estrutura dos dados do filme
interface Movie {
    titleText: { text: string };
    releaseYear: { year: number };
    primaryImage: { url: string };
    // Adicione outras propriedades conforme necessário
}

export default function MoviesApi() {
    const [movieData, setMovieData] = useState<{ [genre: string]: { movie: string, image: string }[] } | null>(null); // Definindo o tipo de movieData

    useEffect(() => {
        fetchMovieData();
    }, []);

    async function fetchMovieData() {
        const generos = ['Drama', 'Adventure', 'Action']
        const config = {
            headers: {
                'X-RapidAPI-Key': 'f2f7791e62msh73c952b5dffb9fep153034jsnc1301a79eb03',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.all(generos.map(g => axios.get('https://moviesdatabase.p.rapidapi.com/titles', { params: { genre: g }, ...config })))

            const movieDataObj: { [genre: string]: { movie: string, image: string }[] } = {};

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
            setMovieData(movieDataObj);


        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    // useEffect para loggar movieData atualizado
    useEffect(() => {
        console.log(movieData);
    }, [movieData]);

    return null; // Não renderiza nada enquanto a requisição está sendo feita
}
