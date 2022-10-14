import React from "react"; 
import { useState, useEffect } from 'react';
import './ingresso.scss';
import { useNavigate } from "react-router-dom"; 

export default function CompraIngresso(){
    const [ inteiras, setInteiras] = useState(0);
    const [ meias, setMeias] = useState(0);
    const [ diaSemana, setDiaSemana] = useState("");
    const [ nacional ,setNacional] = useState(true);
    const [ total, setTotal ] = useState(0);
    const navigate = useNavigate();

    function voltar(){
        navigate('/');
    }

    function totalCompra(){
        let total = 0;

        if (nacional === true) { 
           total = (inteiras * 5) + (meias * 5); 
        } 
        else { 
            if (diaSemana == "quarta-feira") { 
                total = (inteiras + meias) * 14.25; 
            } else { 
                total = (inteiras + meias) * 5; 
            }
        }
        setTotal(total);
    }
    
    useEffect(() => {
        totalCompra()
    }, [inteiras, meias, nacional, total])

    return(
        <section className='sct'>
            <div>
                <h2 className='tit'> Calcular total da compra de ingressos: </h2>

                <p> Informe a quantidade de inteiras: </p>
                <input type='number' value={inteiras} onChange={e => setInteiras(Number(e.target.value))} />

                <p> Informe a quantidade de meias: </p>
                <input type='number' value={meias} onChange={e => setMeias(Number(e.target.value))} />

                <p> Informe o dia da semana: </p>
                <input type='text' value={diaSemana} onChange={e => setDiaSemana(e.target.value)} />
                
                <p> Informe a quantidade de nacional: </p>
                <input id="s"  type='checkbox' value={nacional} onChange={e => setNacional(e.target.value)} />
                <label for="s"> Sim </label>

                <input id="n"  type='checkbox' value={nacional} onChange={e => setNacional(e.target.value)} />
                <label for="n"> Não </label>
            </div>

            <div>
                <button className='btt' onClick={totalCompra}> Calcular o total da compra de ingressos </button>
            </div>

            <div>
                <h3 className='resp'> O total a se pagar pelos ingressos é R${total} </h3>
            </div>

            <div className="espacamento-botao"> 
                <button onClick={voltar}>Voltar</button> 
            </div> 

        </section>
    )
}