import React from 'react'
import {Switch, Route} from "react-router-dom"
import Inicio from "./Inicio/Inicio.jsx"
import ProductoList from "./Productos/Productos.jsx"

export default function Paginas() {
    return (
        <section>
            <Switch>
                <Route path='/' exact Component={Inicio}/>
                <Route path='/productos' exact Component={ProductoList}/>
            </Switch>
        </section>
    )
}
