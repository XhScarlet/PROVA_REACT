import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; 
import './salario.scss';

export default function CalcularSalario(){
    const [ salario, setSalario ] = useState(0);
    const [ bonus, setBonus ] = useState(0);
    const [ desc, setDesc ] = useState(0);
    const [ totalSal, setTotalSal ] = useState(0);
    const navigate = useNavigate();
    function voltar(){
        navigate('/');
    }

    function TotalSalario(){
        let total = (salario * bonus) / 100;
        let desconto = (salario + total) - desc;
        
        let resp = desconto;
        setTotalSal(resp);
    }

    useEffect(() => {
        TotalSalario()
    }, [salario, bonus, desc])

    return(
        <section className='sct'>
            <div>
                <h1 className='tit'> ###   Salário líquido!!!   ###</h1>
                <h4> Informe o salário base: </h4>
               <div className="tudo">
                <input type="number" value={salario} onChange={e => setSalario(Number(e.target.value))}/>
                </div>
                <h4> Informe o bônus mensal em porcentagem: </h4>
                <div className="tudo">
                <input type="number" value={bonus} onChange={e => setBonus(Number(e.target.value))}/>
                </div>
                <h4> Informe o desconto em reais: </h4>
               <div className="tudo">
             <input type="number" value={desc} onChange={e => setDesc(Number(e.target.value))}/>
             </div>
            </div>
            
            <div className="btt">
                <button className='btt' onClick={TotalSalario}> Calcular salário líquido </button>
            </div>

            <div>
                <h3 className='resp'> Seu salário líquido é de R${totalSal} </h3>
            </div>

            <div className="espacamento-botao"> 
                    <button onClick={voltar}>Voltar</button> 
                </div> 
  
        </section>
    )
}