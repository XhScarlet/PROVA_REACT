import { useState } from "react"
import Contar from './contar.scss'
import { useNavigate } from "react-router-dom"; 
import React from "react";

export default function Contador(){
    const [inicio, setInicio] = useState();
    const [fim,setFim] = useState();
    const [resposta, setResposta] = useState();

    const navigate = useNavigate(); 
  
    function voltar(){ 
        navigate('/') 
    } 

    function Contar(inicio,fim){
        let a = [];
    
        for(let i = inicio; i<=fim; i++){
            a =[...a, i]
            a.push(" ")
        }
        return a;
    }

    function Contador(){
        setResposta(Contar(inicio,fim))
    };

    return(
        <main>
            <div>
                <h1>###  Contagem!!!  ###</h1>
            </div>
            <h4>Número de início:</h4>
            <div className="tudo">
            <input type='number' value={inicio} onChange={e => setInicio(e.target.value)}/>
            </div>
            <h4>Número final:</h4>
            <div className="tudo">
            <input type='number' value={fim} onChange={e => setFim(e.target.value)}/>
            </div>
            <div className="btt">
            <button onClick={Contador}>Calcular</button>
            </div>
            <h3>{resposta}</h3>
            <div className="espacamento-botao"> 
                    <button onClick={voltar}>Voltar</button> 
            </div> 
  
        </main>
    )
}