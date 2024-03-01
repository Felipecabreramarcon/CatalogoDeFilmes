'use client'
import React, { useEffect } from "react";
import $ from "jquery";

export default function LoginPage() {
    useEffect(() => {
        // Verifica se estamos no ambiente do navegador antes de executar a lógica dependente do objeto `document`
        if (typeof window !== "undefined") {
            // Array de gêneros
            const genres = ['Drama', 'Action', 'Adventure'];

            // Para cada gênero, fazemos uma consulta separada
            genres.forEach(genre => {
                const settings = {
                    async: true,
                    crossDomain: true,
                    url: 'https://moviesdatabase.p.rapidapi.com/titles',
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'f2f7791e62msh73c952b5dffb9fep153034jsnc1301a79eb03',
                        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                    },
                    data: {
                        genre: genre
                    }
                };

                $.ajax(settings).done(function (response) {
                    console.log(`Filmes de ${genre}:`, response);
                    // Faça algo com os dados da resposta, por exemplo, salvar em um estado
                });
            });
        }
    }, []);

    return (
        <div className="h-screen w-screen backdrop-blur-[8px] bg-black/50 flex flex-col justify-center items-center p-8">
            <div className="bg-black w-5/12 h-5/12 p-4  ">
                <p>Drama</p>
                <div></div>
            </div>
            <div className="bg-black w-5/12 h-5/12 p-4">
                <p>Comédia</p>
                <div></div>
            </div>
        </div>
    );
}
