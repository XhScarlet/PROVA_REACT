import { useState, useEffect } from 'react';
import './abastecimento.scss';
import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Abastecimento(){
    const [ capac, setCapac ] = useState(0);
    const [ consumo, setConsumo ] = useState(0);
    const [ dist, setDist ] = useState(0);
    const [ Qtdparadas, setQtdparadas ] = useState(0);
    const navigate = useNavigate();

    function voltar(){
        navigate('/');
    }

    function totalParadas() {
        let total = dist / (capac * consumo);
        let resp = total;
        setQtdparadas(Math.ceil(resp));
    }

    
    useEffect(() => {
        totalParadas()
    }, [capac, consumo, dist, Qtdparadas])

    return(
        <section >
            <div>
                <h2 > Calcular quantidade de paradas </h2>
                <p> Informe a capacidade do tanque em litros: </p>
                <input type="number" value={capac} onChange={e => setCapac(Number(e.target.value))}/>
            
                <p> Informe o consumo por km: </p>
                <input type="number" value={consumo} onChange={e => setConsumo(Number(e.target.value))}/>
            
                <p> Informe a distância em km: </p>
                <input type="number" value={dist} onChange={e => setDist(Number(e.target.value))}/>
            </div>

            <div>
                <button  onClick={totalParadas}> Calcular paradas </button>
            </div>

            <div>
                <h3> Você precisará fazer {Qtdparadas} paradas para abastecer </h3>
            </div>

            <div className="espacamento-botao"> 
                    <button onClick={voltar}>Voltar</button> 
                </div> 
  
        </section>
    )
}