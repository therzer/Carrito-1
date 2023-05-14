import React, { useContext } from 'react'
import "./Productos.css"
import {DataContext} from "../../context/DataProvider.jsx"
import { Link } from 'react-router-dom'

function CardItem({
    id,
    title,
    price,
    image,
    category,
    cantidad
}){

    const value = useContext(DataContext)
    const addCarrito = value.addCarrito;

    return(
        <div className="producto">
            <a href='#'><img src={image} alt={title} /></a>

            <div className='prod-footer'>
                <h2>{title}</h2>
                <p>Categoria: {category}</p>
                <p className='precio-pro'>Precio: {price}</p>

                <div className="contenedor-btn">
                    <button className='btn-add-pro' onClick={()=> addCarrito(id)}>
                            Agregar Carrito
                    </button>
                    <a href="#">Detalles</a>
                </div>
            </div>
        </div>
    )
}

export default function Productos() {

    const value = useContext(DataContext)
    const [productos] = value.productos;

    return (
        <>
            <h1 className='producto-h1'>PRODUCTOS</h1>
            <div className='card'>
            {
                productos.map(pro =>(
                    <CardItem 
                    key={pro.id}
                    title={pro.title}
					image={pro.image}
					category={pro.category}
					price={pro.price}
					id={pro.id}
                    />
                ))
            }
            </div>
        </>
    )
}
