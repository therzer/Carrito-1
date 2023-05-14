import React from 'react'
import {
    Route,
    Routes
} from "react-router-dom";

import Inicio from "./Inicio/Inicio"
import Producto from "../components/Productos/Productos"

export default function Paginas() {
    return (
        <section>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/productos' element={<Producto/>}/>
            </Routes>
        </section>
    )
}
