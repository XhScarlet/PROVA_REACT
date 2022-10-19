import { useState } from "react";
import  "./retangulo.scss";
import React from "react"; 
import { useNavigate } from "react-router-dom"; 
 

export default function Retangulo () {
    const [coluna, setColuna] = useState (1);
    const [linhas, setLinhas] = useState(1);
    const [escolha,setEscolha]= useState('asterisco')
    const [ resposta, setResposta] = useState([]);
    
    const navigate = useNavigate(); 
  
    function voltar(){ 
        navigate('/') 
    } 

    function desenharRetangulo(linhas, colunas, simbolo){
        let cxl = []
        let retangulo = [];
    
        for(let l = 0; l <= linhas; l++){
            retangulo[l] = simbolo
        for(let c = 0; c <= colunas; c ++){
            process.stdout.write("*");

        }
            retangulo.push('')
    
        }
        return cxl;
    }

    function calcularRetangulo(){

        setResposta(desenharRetangulo (linhas, coluna, escolha ==='asterisco' ? '*' : '●') );

    }


    return(
        <main>
            <h1>###   Calcular retângulo!!!   ###</h1>
            <h4>Número da quantidade da base:</h4>
            <div className="tudo">
            <input type='number' value={linhas} onChange={e => setLinhas(e.target.value)}/>
            </div>
            <h4>Número da quantidade da altura:</h4>
            <div className="tudo">
            <input type='number' value={coluna} onChange={e => setColuna(e.target.value)}/>
            </div>
            <div className="tudo-2">
            <select onChange={e => setEscolha(e.target.value)}>
                <option value='img'>imagem</option>
                <option value='circ'>Circulo</option>
                <option value='asteristico'>Asteristico</option>
            </select>
            </div>
            <div className="tudo-2">
            <button onClick={calcularRetangulo}>Calcular</button>
            </div>
            {resposta.map (item =>{
            if(escolha === 'img') 
            return <div><img src="../assets/images/matheus.png" width={100}/></div>
            else return <p> {item}</p>  
            
            })}
            
            
            <div className="espacamento-botao"> 
                    <button onClick={voltar}>Voltar</button> 
            </div>
        </main>
    )
}