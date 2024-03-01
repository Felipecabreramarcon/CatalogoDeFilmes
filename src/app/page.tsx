'use client'
import React from "react";
import { useState } from "react";
import { useEffect } from 'react'
import * as yup from "yup";



export default function Loginpage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');


    //validaçao para email (yup considera 'xxxxx@xxxxxxxx' um email válido.)
    const EMAIL_REGX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //obter valores de email e senha respectivamente
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setEmail(value);
    };

    const handleChangeSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSenha(value);
    };

    //funçao de redirecionamento
    const sendMsg = async (e: any) => {

        e.preventDefault()
        //caso ambos os campos estejam vazios apresenta: 'Preencha os campos', caso contrario apresenta mensagem determinada na funcao Validate().
        if (email.trim() === '' && senha.trim() === '') {
            setMessage('Preencha os campos');
            return;
        }
        const valid = await Validate();

        // Se a validação for bem-sucedida, redireciona para a página seguinte
        if (valid) {
            window.location.href = '/page1'; // Redirecionamento
        }
    };

    // Função para validar o formulário
    async function Validate() {
        //Impoe condicoes de validaçao
        let schema = yup.object().shape({
            email: yup.string().matches(EMAIL_REGX, 'Insira um email válido').required('Insira um email!'),
            senha: yup.string().required('Insira uma senha!')
        });
        //Valida as condiçoes impostas acima
        try {
            await schema.validate({
                email: email,
                senha: senha
            });
            //caso as condicoes sejam satisfeitas:
            setMessage('')
            return true
        }
        //caso nao sejam satisfeitas:
        catch (error: any) {
            setMessage(error.errors);
            return false
        }
    }
    //monitoramento de valores
    useEffect(() => {
        console.log(message);
    }, [message]);

    //conteudo da página
    return (
        <div className="flex flex-row-reverse h-screen">
            <div className="w-1/3 bg-opacity-25 border-solid border border-white bg-white rounded-2xl m-10 flex flex-col justify-center items-center p-8 gap-8 backdrop-blur-sm" style={{ borderWidth: '0.5px' }}>
                <h1 className="text-center font-bold text-4xl">Login</h1>
                <div className="w-full flex flex-col items-center gap-4">
                    <input className="w-full bg-transparent p-4 border-2 border-[#F95FA7] rounded placeholder:text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] focus:outline-none " value={email} onChange={handleChangeEmail} type="email" placeholder="Email" ></input>

                    <input className="w-full bg-transparent p-4 border-2 border-[#F95FA7] rounded  placeholder:text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] focus:outline-none" value={senha} onChange={handleChangeSenha} type="password" placeholder="Senha"></input>


                    <button className="bg-[#F95FA7] w-full flex justify-center p-4 rounded shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] focus:outline-none focus:border-none" onClick={sendMsg}>Entrar</button>
                    <div className="h-4 text-red-600">{message}</div>

                </div>
            </div>

            <div className="w-2/3 flex flex-col flex-wrap justify-center items-start px-32 gap-12">
                <h1 className="font-bold text-4xl">Bem Vindo ao<br></br>Sistema de XPTO</h1>
                <h3 className="text-2xl leading-7">Lorem Ipsum is simply dummy text of the printing and <br></br>typesetting industry.</h3>
            </div>
        </div >
    );
}
