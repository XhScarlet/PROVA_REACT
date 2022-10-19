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
                <h1 > ###  Abastecimento!!!  ### </h1>
                <h4> Informe a capacidade do tanque em litros: </h4>
                <div className='tudo'>
                <input type="number" value={capac} onChange={e => setCapac(Number(e.target.value))}/>
                </div>
                <h4> Informe o consumo por km: </h4>
                <div className="tudo">
                <input type="number" value={consumo} onChange={e => setConsumo(Number(e.target.value))}/>
                </div>
                <h4> Informe a distância em km: </h4>
                <div className="tudo">
                <input type="number" value={dist} onChange={e => setDist(Number(e.target.value))}/>
                </div>
            </div>

            <div className="btt">
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