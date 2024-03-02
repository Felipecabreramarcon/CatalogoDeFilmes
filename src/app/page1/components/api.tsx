import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MoviesApi() {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        fetchMovieData();
    }, []);

    async function fetchMovieData() {
        const config = {
            headers: {
                'X-RapidAPI-Key': 'f2f7791e62msh73c952b5dffb9fep153034jsnc1301a79eb03',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.get('https://moviesdatabase.p.rapidapi.com/titles', config);
            console.log('Dados retornados:', response.data);
            setMovieData(response.data); // Armazenando os dados da resposta no estado 'movieData'
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    return null; // Não renderiza nada enquanto a requisição está sendo feita
}
