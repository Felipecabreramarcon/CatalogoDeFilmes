'use client'
import $ from "jquery";
import { useEffect } from "react";

export default function Loginpage() {
    useEffect(() => {
        const settings = {
            async: true,
            crossDomain: true,
            url: 'https://moviesdatabase.p.rapidapi.com/titles',
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f2f7791e62msh73c952b5dffb9fep153034jsnc1301a79eb03',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            // Aqui você pode fazer algo com os dados da resposta, como definir o estado de um componente React
        });
    }, []); // O segundo argumento vazio indica que esta função de efeito é executada apenas uma vez, sem dependências

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
