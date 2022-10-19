import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './home/home.js'
import Acai from './acai/acai.js'
import Gramas from './gramas/gramas.js'
import Signo from './signo/signo.js'
import Salario from './salario/salario.js'
import Abastecimento from './abastecimento/abastecimento.js'
import Febre from './febre/febre.js'
import Ingresso from './ingresso/ingresso.js'
import Orçamento from './orcamento/orcamento.js'
import Contar from './contar/contar.js'
import Estrelinha from './estrelinha/estrelinha.js'
import Retangulo from './retangulo/retangulo.js'

export default function Path() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/>} />
                <Route path='/acai' element={ <Acai/>} />
                <Route path='/gramas' element={ <Gramas/>} />
                <Route path='/signo' element={ <Signo/>} />
                <Route path='/salario' element={ <Salario/>} />
                <Route path='/abastecimento' element={ <Abastecimento/>} />
                <Route path='/febre' element={ <Febre/>} />
                <Route path='/cinema' element={ <Ingresso/>} />
                <Route path='/orcamento' element={ <Orçamento/>} />
                <Route path='/contar' element={ <Contar/>} />
                <Route path='/estrelinha' element={ <Estrelinha/>} />
                <Route path='/retangulo' element={ <Retangulo/>} />

            </Routes>
        </BrowserRouter>
    )
}