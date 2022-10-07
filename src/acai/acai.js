
import './acai.scss'
import { useEffect, useState  } from 'react';


export default function Acai() {
    const [qtdPeq, setQtdPeq ] = useState(0);
    const [ qtdMed, setQtdMed ] = useState(0);
    const [ qtdGra, setQtdGra ] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [resultado, setResultado] = useState(0);
    
    function Calcular() {

        let total = qtdPeq * 13.50 + qtdMed * 15 +  qtdGra * 17.50;
        let desc= total * desconto /100;

        let  final = total - desc;
        setResultado(final)

    }

    useEffect ( () => {
        Calcular ()
    },
         [ qtdPeq, qtdMed, qtdGra, desconto])


    return (
        <main>
            <h3> ### AÇAI ### </h3>

            <p> Quantidade de açai pequenos:</p>
            <input type='Number' value={qtdPeq} onChange={e => setQtdPeq(Number(e.target.value))} />
            
            <p> Quantidade de açai medios:</p>
            <input type='Number' value={qtdMed}  onChange={e=> setQtdMed(Number(e.target.value))}/>
            
            <p>Quantidade de açai grandes:</p>
            <input type='Number' value={qtdGra} onChange={e => setQtdGra(Number(e.target.value))} />
            
            <p>Desconto</p>
            <input type='Number' value={desconto} onChange={e => setDesconto(Number(e.target.value))} />

            <div>
            <span> Total à pagar é R$ {resultado} </span>
            </div>
        </main>
    )
}