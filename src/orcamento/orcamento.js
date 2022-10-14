import React from "react"; 
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; 
import './orcamento.scss';

export default function CalcularOrçamento(){
    const [ ganhos, setGanhos ] = useState(0);
    const [ gastos, setGastos ] = useState(0);
    const [ total, setTotal ] = useState(0);
    const navigate = useNavigate();

    function voltar(){
        navigate('/');
    }

    function SituacaoOrcamental(){
        let situacao = 0;

        if(gastos > ganhos){
            situacao = "Orçamento comprometido! Hora de rever seus gastos!"
        }

        else if(gastos * 81 / ganhos || gastos * 100 / gastos){
            situacao = "Cuidado, seu orçamento pode ficar comprometido!"
        }

        else if(gastos * 51 / ganhos || gastos * 80 / ganhos){
            situacao = "Atenção, melhor conter seus gastos!"
        }

        else if(gastos * 21 / ganhos || gastos * 50 / ganhos){
            situacao = "Muito bem, seus gastos não ultrapassam metade dos ganhos!"
        }

        else if(gastos == 0 ||gastos * 20 / ganhos){
            situacao = "Parabéns, está gerenciando bem seu orçamento!"
        }

        else{
            situacao = "Orçamento inválido!"
        }
        setTotal(situacao);
    }

    useEffect(() => {
        SituacaoOrcamental()
    }, [ganhos, gastos, total]);
    
    return(
        <section className='sct'>
            <div>
                <h2 className='tit'> Calcular Orçamento: </h2>

                <p> Informe o total de ganhos: </p>
                <input type="number" value={ganhos} onChange={e => setGanhos(Number(e.target.value))}/>

                <p> Informe o total de gastos: </p>
                <input type="number" value={gastos} onChange={e => setGastos(Number(e.target.value))}/>
            </div>

            <div>
                <button className='btt' onClick={SituacaoOrcamental}> Calcular Orçamento </button>
            </div>

            <div>
                <span className='resp'> {total} </span>
            </div>
            <div className="espacamento-botao"> 
                <button onClick={voltar}>Voltar</button> 
            </div> 
        </section>
    )
}