import React from "react"; 
 import './febre.scss'; 
 import { useNavigate } from "react-router-dom"; 
 import { useState } from "react"; 
  
  
 export default function Temperatura(){ 
  
    const [temp, setTemp] = useState(''); 
    const [resposta,setResposta] = useState(''); 
    const navigate = useNavigate(); 
  
    function voltar(){ 
        navigate('/') 
    } 
  
    function repost(){ 
    const resp = febre(temp); 
    setResposta(resp); 
    } 
  
    function febre(temperatura){ 
  
    if(temperatura >= 41){ 
    return "A situação para sua temperatura é Hipertemia!" 
    } 
    else if(temperatura >= 39.6 && temperatura < 41 ){ 
    return "A situação para sua temperatura é Febre Alta!" 
    } 
    else if(temperatura >= 37.6 && temperatura <39.6){ 
    return "Você está com Febre!" 
    } 
    else if(temperatura >= 36 && temperatura < 37.6){ 
    return "Você está com a temperatura corporal normal!" 
    } 
    else if(temperatura < 36){ 
    return "A situação para sua temperatura é de Hipotermia!" 
    } 
    else{ 
    return "Informe sua temperatura" 
    } 
 } 
  
  
 return( 
    <main> 
        <section className="Container-febre"> 
            <h1>Verifique sua temperatura!</h1> 
                <div> 
                    <h4>Informe sua temperatura:</h4>
                    <div className="tudo">
                    <input type='number' value={temp} onChange={e => setTemp(e.target.value)}/> 
                    </div>
                </div>

                <div className="resposta"> 
                    <div className="btt">  
                        <button onClick={repost}>Verificar temperatura</button> 
                    </div> 
  
                    <h3>{resposta}</h3> 
                </div> 
                <div className="btt"> 
                    <button onClick={voltar}>Voltar</button> 
                </div> 
  
        </section> 
    </main> 
 
 ) 
 }