
import { useState, useEffect } from 'react'
import './gramas.scss'
import React from 'react';
import {useNavigate} from 'react-router-dom';


export default function Gramas() {

    const [gramas, setGramas] = useState(0);
    const [resposta, setResposta] = useState(0);
    const navigate = useNavigate();
    function voltar(){
        navigate('/');
    }

    function Calcular() {
    let total = 0;
     if(gramas > 1000){
        total = (gramas/100) * 3
     }
     else{
        total = (gramas /100)*3.50
     }
        setResposta(total);
    }

    useEffect(()=>{
        Calcular()

    }, [gramas])


    return (
        <main>
            <h3 className='gramas'> ### SORVETERIA ###  </h3>

            <div>
                <p> Quantidade de gramas: </p>
                <input type='number' value={gramas} onChange={e => setGramas(e.target.value)} />
                <div>
                    <span>O total à pagar é R$ {resposta}  </span>
                </div>
            </div>
            <div className="espacamento-botao"> 
                    <button onClick={voltar}>Voltar</button> 
                </div> 
  
        </main>
    )
}