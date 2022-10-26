import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Financia(capital, taxa, tempo, entrada){
    let cap = capital - entrada;
    let montante = cap * Math.pow((1 = (taxa/100)), tempo);
    let juros = montante - capital;
    let parcela = montante / (tempo * 12);

    const m = Number(montante.toFixed(2));
    const j = Number(juros.toFixed(2));
    const p = Number(parcela.toFixed(2));
    
    let retorno = [m, j, p];

    return retorno;
}

    const [entrada, setEntrada] = useState(); 
    const [taxa, setTaxa] = useState();
    const [periodo, setPeriodo] = useState();
    const [financiamento, setFinanciamento] = useState();   
    const [parcela, setParcela] = useState();
    const [montante, setMontante] = useState();
    const [juros, setJuros] = useState();

    const navigate = useNavigate();

function Calcular() {
    try { constr = financia(entrada, taxa, periodo, financiamento); setMontante(Math.abs(r[0])); setParcela (Math.abs(r[2]));
        setJuros(Math.abs(r[1]));

    } catch (err) { 
        alert(err.message)
    }

    return(
        <main>
            <section className='sct'>
                <h1 className='tit'> Calcular juros compostos: </h1>
                <input  placeholder="Entrada" value={entrada} onChange={(e) => setEntrada(e.target.value)} />
                <input  placeholder="Taxa" value={taxa} onChange={(e) => setTaxa(e.target.value)} />
                <input  placeholder="Periodo"  value={periodo} onChange={(e) => setPeriodo(e.target.value)} />
                <input  placeholder="Periodo"  value={parcela} onChange={(e) => setParcela(e.target.value)} />

                <div className="espacamento-botao">
                <button className="btt"
                    onClick={async () => {
                        try {
                          navigate("/")
                        } catch (err) {

                        }
                    }}>
                    VOLTAR
                </button>
                </div>
            </section>
        </main>
    )
}