import React from 'react'
import Img from "../../assets/img03.jpg"
import "./Productos.css"

export default function Productos() {
    return (
        <>
            <h1 className='producto-h1'>PRODUCTOS</h1>
            <div className='card'>
                <div className="producto">
                    <a href='#'><img src={Img} alt="" /></a>

                    <div className='prod-footer'>
                        <h2>Titulo</h2>
                        <p>Categoria</p>
                        <p className='precio-pro'>$5415</p>

                        <div className="contenedor-btn">
                            <button className='btn-add-pro'>
                                Agregar Carrito
                            </button>
                            <a href="#">Detalles</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
