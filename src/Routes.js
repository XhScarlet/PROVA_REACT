import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Acai from './acai/acai.js'
import Gramas from './gramas/gramas.js'
import Signo from './signo/signo.js'

export default function Path() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/acai' element={ <Acai/>} />
                <Route path='/gramas' element={ <Gramas/>} />
                <Route path='/signo' element={ <Signo/>} />
            </Routes>
        </BrowserRouter>
    )
}