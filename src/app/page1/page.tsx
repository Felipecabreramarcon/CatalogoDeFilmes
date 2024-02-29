import Link from "next/link";
import React from "react";

export default function Loginpage() {

    return (
        <div className="flex flex-row-reverse h-screen">
            <div className="w-1/3 bg-opacity-25 border-solid border border-white bg-white rounded-2xl m-10 flex flex-col justify-center items-center p-8 gap-8 backdrop-blur-sm" style={{ borderWidth: '0.5px' }}>
                <h1 className="text-center font-bold text-4xl">Login</h1>

                <div className="w-full flex flex-col items-center gap-4">
                    <input className="w-full bg-transparent p-4 border-2 border-[#F95FA7] rounded placeholder:text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] focus:outline-none " type="email" placeholder="Email"></input>
                    <input className="w-full bg-transparent p-4 border-2 border-[#F95FA7] rounded  placeholder:text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] focus:outline-none" type="password" placeholder="Senha"></input>
                    <Link className="bg-[#F95FA7] w-full flex justify-center p-4 rounded shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" href='page2'>Entrar</Link>
                </div>


            </div>
            <div className="w-2/3 flex flex-col flex-wrap justify-center items-start px-32 gap-12">
                <h1 className="font-bold text-4xl">Bem Vindo ao<br></br>Sistema de XPTO</h1>
                <h3 className="text-2xl leading-7">Lorem Ipsum is simply dummy text of the printing and <br></br>typesetting industry.</h3>
            </div>

        </div >
    );
}