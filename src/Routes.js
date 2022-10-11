import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './home/home.js'
import Acai from './acai/acai.js'
import Gramas from './gramas/gramas.js'
import Signo from './signo/signo.js'
import Salario from './salario/salario.js'
import Abastecimento from './abastecimento/abastecimento.js'
import Febre from './febre/febre.js'

export default function Path() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={ <Home/>} />
                <Route path='/acai' element={ <Acai/>} />
                <Route path='/gramas' element={ <Gramas/>} />
                <Route path='/signo' element={ <Signo/>} />
                <Route path='/salario' element={ <Salario/>} />
                <Route path='/abastecimento' element={ <Abastecimento/>} />
                <Route path='/febre' element={ <Febre/>} />
            </Routes>
        </BrowserRouter>
    )
}