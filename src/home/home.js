import './home.scss';
import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Home(){
    const navigate = useNavigate();

    function acai(){
        navigate('/acai')
    }
    
    function gramas(){
        navigate('/gramas')
    }

    function signo(){
        navigate('/signo')
    }

    function salario(){
        navigate('/salario')
    }
        
    function abastecimento(){
        navigate('/abastecimento')
    }

    function febre(){
        navigate('/febre')
    }

    function cinema(){
        navigate('/cinema')
    }

    function orcamento(){
        navigate('/orcamento')
    }

    function contar(){
        navigate('/contar')
    }

    function estrelinha(){
        navigate('/estrelinha')
    }

    function retangulo(){
        navigate('/retangulo')
    }

    return(
        <main>
            <section>
                <div>
                    <h1 className="home">###   Bem vindo(a)!!!   ###</h1>
                    <h3> Selecione à página que gostariam de visitar: </h3>
                </div>
                <div className="home-botao">
                    <button onClick = {acai}> Açai </button>
                    <button onClick = {gramas}> Gramas </button>
                    <button onClick = {signo}> Signo </button>
                    <button onClick = {salario}> Salário </button>
                    <button onClick = {abastecimento}> Paradas </button>
                    <button onClick = {febre}> Febre </button>
                    <button onClick = {cinema}> Cinema </button>
                    <button onClick = {contar}> Contagem </button>
                    <button onClick = {estrelinha}> Asterístico </button>
                    <button onClick = {retangulo}> Retângulo </button>
                    
                </div>
            </section>
        </main>
    )

}

