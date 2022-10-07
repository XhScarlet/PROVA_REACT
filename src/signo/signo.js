
import { useEffect, useState } from 'react'
import './signo.scss'


export default function Signo() {

    const [mes, setMes] = useState('');
    const [dia, setDia] = useState();
    const [Resul, setResul] = useState('Não');

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
            <h3> ### SIGNO LIBRA ### </h3>
            <p>Mês:</p>
            <input type='text' value={ mes } onChange={e => setMes (e.target.value)} />

            <p>Dia:</p>
            <input type='number' value={ dia }    onChange= {e => setDia (e.target.value)} />
                
            <button onClick={Calcular} >Verificar Signo</button>

            <div>
                <span>{`É do signo de Libra? ${Resul}`}</span>
            </div>
        </main>
    )
}