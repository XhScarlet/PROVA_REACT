import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Matrizs(){
    const [base, setBase] = useState();
    const [altura, setAltura] = useState();
    const [resposta, setResposta] = useState([]);

    function Matriz() {
        try{


        let matriz = [];
        let array =[];

        for (let i = 0; i < base; i++) {
            array[i] = "*";

            for (let j = 0; j < alt; j++) {
                matriz[j] = new Array (array);
            }}
            setResposta(matriz);
        }
        catch{
            setResposta("ugisaefgdsafhgiuo")
        }



        }

    const navigate = useNavigate()
    return(
        <main>
            <h1> Desenhar Retângulo: </h1>

            <input type="text"  placeholder='Base:' value={base}  onChange={ e => setBase(Number(e.target.value))} />
            <input type="text"  placeholder='Altura' value={alt}  onChange={ e => setAltura(Number(e.target.value))} />
            <button classname='btt'onClick={Matriz}> Faça!</button>
            <div className='resp'>{resposta.map(item => <p>{ item }</p>)}</div>

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
        </main>
    )
}