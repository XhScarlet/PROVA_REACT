import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Matrizs(){
    const [base, setbase] = useState();
    const [alt, setaltura] = useState();
    const [resposta, steResposta] = useState([]);

    function Matriz() {
        try{


        let matriz = [];
        let array =[];

        for (let i = 0; i < base; i++) {
            array[i] = "*";

            for (let j = 0; j < alt; j++) {
                matriz[j] = new Array (array);
            }}
            steResposta(matriz);
        }
        catch{
            steResposta("ugisaefgdsafhgiuo")
        }



        }

    const navigate = useNavigate()
    return(
        <main>
            <h1> Desenhar Retângulo: </h1>

            <input type="text"  placeholder='Base:' value={base}  onChange={ e => setbase(Number(e.target.value))} />
            <input type="text"  placeholder='Altura' value={alt}  onChange={ e => setaltura(Number(e.target.value))} />
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