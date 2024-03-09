'use client'
import { Field, Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import * as yup from "yup";

interface MyFormValues {
    Email: string;
    Password: string
}

export default function Loginpage() {
    const [message, setMessage] = useState('');


    //validaçao para email (yup considera 'xxxxx@xxxxxxxx' um email válido.)
    const EMAIL_REGX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //funçao de redirecionamento
    const sendMsg = async (values: any) => {

        //caso ambos os campos estejam vazios apresenta: 'Preencha os campos', caso contrario apresenta mensagem determinada na funcao Validate().
        if (values.Email == '' && values.Password == '') {
            setMessage('Preencha os campos');
            return;
        }
        const valid = await Validate(values);

        // Se a validação for bem-sucedida, redireciona para a página seguinte
        if (valid) {
            window.location.href = '/MoviesPage';
        }
    };

    // Função para validar o formulário
    async function Validate(values: any) {
        //Impoe condicoes de validaçao
        let schema = yup.object().shape({
            email: yup.string().matches(EMAIL_REGX, 'Insira um email válido').required('Insira um email!'),
            senha: yup.string().required('Insira uma senha!')
        });
        //Valida as condiçoes impostas acima
        try {
            await schema.validate({
                email: values.Email,
                senha: values.Password
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

    const initialValues: MyFormValues = { Email: '', Password: '' };

    //conteudo da página
    return (
        <div className="flex desktop:flex-row laptop:flex-row  mobile:flex-col  h-screen mobile:justify-center mobile:items-center p-8">

            <div className="w-2/3 mobile:w-full flex flex-col justify-center mobile:items-center desktop:items-start laptop:items-start px-32 gap-12">
                <h1 className="font-bold mobile:w-96 mobile:text-2xl tablet:text-4xl laptop:text-4xl desktop:text-4xl laptop:text-start desktop:text-start mobile:text-center">Bem Vindo ao Sistema de XPTO</h1>
                <h3 className="desktop:text-start desktop:text-2xl laptop:w-full laptop:text-2xl desktop:w-2/3 laptop:text-start leading-7 mobile:w-96 mobile:text-base mobile:text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            </div>
            <div className="desktop:w-2/5 tablet:w-2/3 laptop:h-full desktop:h-full mobile:h-1/2 mobile:w-full border-solid border-[0.5px] border-white bg-white/25 rounded-2xl m-10 flex flex-col justify-center items-center p-8 gap-8 backdrop-blur-sm">
                <h1 className="text-center font-bold text-4xl whitespace-nowrap">Login</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={values => {
                        sendMsg(values)
                    }} >
                    <Form className="w-full flex flex-col items-center gap-4">
                        <Field autocomplete='off' className="w-full bg-transparent p-4 border-2 border-rosa rounded placeholder:text-white shadow-input-shadow  focus:outline-none input" name='Email' type="email" placeholder="Email" ></Field>

                        <Field className="w-full bg-transparent p-4 border-2 border-rosa rounded  placeholder:text-white shadow-input-shadow focus:outline-none input" name="Password" type="password" placeholder="Senha"></Field>


                        <button type="submit" className="bg-rosa w-full flex justify-center p-4 rounded shadow-input-shadow focus:outline-none focus:border-none" >Entrar</button>
                        <div className="h-4 font-bold text-red-600">{message}</div>

                    </Form>
                </Formik>
            </div>

        </div >
    );
}
