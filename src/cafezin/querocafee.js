import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cafezin(){

    const [alunos, setAlunos] = useState();
    const [capacidade, setCapacidade] = useState();;
    const [ml, setMl] = useState();
    const [total, setTotal] = useState();

    const navigate = useNavigate();

    function Cafes(){
        try{
            if(alunos >= 0 && capacidade >= 0 && ml>= 0 ){

                let a = 1;
                let b = (alunos * ml) / 1000;
                let c = capacidade * a;
                while (c < b) {
                    a++;
                    c = capacidade * a
                }
                setTotal(c)

                }}
                catch(err){
                    setTotal(err)

                }
    }

    useEffect(() => {
        Cafes()
    }, [alunos, capacidade, ml])



    return(
        <main>
            <section className="tudo">
                <h1> Calcular litros de café: </h1>
                <input  placeholder="Quantidade de alunos" value={alunos} onChange={(e) => setAlunos(e.target.value)} />
                <input  placeholder="Capacidade da cafeteira" value={capacidade} onChange={(e) => setCapacidade(e.target.value)} />
                <input  placeholder="Mililitros por aluno"  value={ml} onChange={(e) => setMl(e.target.value)} />
                <input  className="resp" placeholder="Total de litros" disabled="disabled" value={total} />

                <div className="espacamento-botao">
        <button
            className="btt"
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