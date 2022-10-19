
import { useEffect, useState } from 'react';
import './signo.scss';
import React from 'react';
import {useNavigate} from 'react-router-dom';


export default function Signo() {

    const [mes, setMes] = useState('');
    const [dia, setDia] = useState();
    const [Resul, setResul] = useState('Não');
    const navigate = useNavigate();
    function voltar(){
        navigate('/');
    }

    function Calcular() {

        if(mes == 'Setembro' && dia >= 23|| mes == 'Outubro' && dia <= 22){
            setResul('Seu signo é libra')
        }
        else{
            setResul('Seu signo não é libra')
        }
    }

    useEffect(() =>{
        Calcular()

    }, [mes, dia])

    return (
        <main>
            <h1 className='signo'> ### SIGNO LIBRA ### </h1>
            <h4>Mês:</h4>
            <div className="tudo">
            <input type='text' value={ mes } onChange={e => setMes (e.target.value)} />
            </div>
            <h4>Dia:</h4>
            <div className="tudo">
            <input type='number' value={ dia }    onChange= {e => setDia (e.target.value)} />
            </div>
            <div className="calcu">
            <button onClick={Calcular} >Verificar Signo</button>
            </div>
            <div>
                <h3>{`É do signo de Libra? ${Resul}`}</h3>
            </div>
            
            <div className="espacamento-botao"> 
                    <button onClick={voltar}>Voltar</button> 
                </div> 
  
        </main>
    )
}