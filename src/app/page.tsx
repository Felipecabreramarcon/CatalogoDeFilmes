'use client'
import { RSC_ACTION_VALIDATE_ALIAS } from "next/dist/lib/constants";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useEffect } from 'react'
import * as yup from "yup";



export default function Loginpage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [senhaError, setSenhaError] = useState('');

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setEmail(value);
    };

    const handleChangeSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSenha(value);
    };

    // Função para validar o formulário
    async function Validate() {
        let schema = yup.object().shape({
            email: yup.string().email('Insira um email válido!').required('Campo obrigatório'),
            senha: yup.string().required('Campo obrigatório')
        });

        try {
            await schema.validate({
                email: email,
                senha: senha
            });
            setIsValid(true);
            setEmailError('');
            setSenhaError('');
        } catch (error: any) {
            setMessage(error.errors);
            setIsValid(false);
            // Verifica quais erros ocorreram
            if (error.path === 'email') {
                setEmailError('Email inválido');
            } else {
                setEmailError('');
            }
            if (error.errors.includes('Campo obrigatório') && error.path === 'senha') {
                setSenhaError('Preencha o campo senha');
            } else {
                setSenhaError('');
            }
        }
    }

    // Função chamada quando o botão de entrada é pressionado
    const handleEntrarClick = () => {
        Validate();
        // Lógica adicional aqui, se necessário
    };

    return (
        <div className="flex flex-row-reverse h-screen">
            <div className="w-1/3 bg-opacity-25 border-solid border border-white bg-white rounded-2xl m-10 flex flex-col justify-center items-center p-8 gap-8 backdrop-blur-sm" style={{ borderWidth: '0.5px' }}>
                <h1 className="text-center font-bold text-4xl">Login</h1>
                <div className="w-full flex flex-col items-center gap-4">
                    <input className="w-full bg-transparent p-4 border-2 border-[#F95FA7] rounded placeholder:text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] focus:outline-none " value={email} onChange={handleChangeEmail} type="email" placeholder="Email" ></input>

                    <input className="w-full bg-transparent p-4 border-2 border-[#F95FA7] rounded  placeholder:text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] focus:outline-none" value={senha} onChange={handleChangeSenha} type="password" placeholder="Senha"></input>

                    {isValid ? (
                        <Link className="bg-[#F95FA7] w-full flex justify-center p-4 rounded shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" href='page1'>Entrar</Link>
                    ) : (
                        <button className="bg-[#F95FA7] w-full flex justify-center p-4 rounded shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" onClick={handleEntrarClick}>Entrar</button>
                    )}

                </div><div>{emailError && <p className="text-red-500">{emailError}</p>}{senhaError && <p className="text-red-500">{senhaError}</p>}</div>
            </div>

            <div className="w-2/3 flex flex-col flex-wrap justify-center items-start px-32 gap-12">
                <h1 className="font-bold text-4xl">Bem Vindo ao<br></br>Sistema de XPTO</h1>
                <h3 className="text-2xl leading-7">Lorem Ipsum is simply dummy text of the printing and <br></br>typesetting industry.</h3>
            </div>
        </div >
    );
}
