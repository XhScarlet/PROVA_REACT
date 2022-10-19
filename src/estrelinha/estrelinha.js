import { useState } from "react"
import "./estrelinha.scss";
import React from "react"; 
import { useNavigate } from "react-router-dom"; 
 

export default function Desenho(){
    
    const [qtd, setQtd] = useState();
    const [resposta, setResposta] = useState([]);

    const navigate = useNavigate(); 
  
    function voltar(){ 
        navigate('/') 
    } 

    function DesenhoLinha(quantidade){
        let l = [];
        for (let i = 1; i <= quantidade; i++){
            l.push(" * ")
        }
        return l;
    }

    function DesenhoLinhas(){
        setResposta(DesenhoLinha(qtd))
    }

    return(
        <main>
            <h1>###   Contar asteristico!!!   ###</h1>
            <h4>Quantidade de asteristicos:</h4>
            <div className="tudo">
            <input value={qtd} onChange={e => setQtd(e.target.value)}/>
            </div>
            <div className="btt">
            <button onClick={DesenhoLinhas}>Calcular</button>
            </div>
            <h3>
            {resposta}
            </h3>
            <div className="espacamento-botao"> 
                    <button onClick={voltar}>Voltar</button> 
            </div> 
        </main>
    )
}