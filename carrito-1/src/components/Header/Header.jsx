import React from 'react'
import './Header.css'
import Logo from "../../assets/Nike.jpg"

export default function Header() {
    return (
        <header>
            <a href="#" className='logo'>
                <img src={Logo} alt="Logo" />
            </a>
            <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
            </ul>

            <div className="carrito-i">
                <box-icon name='cart' color='#555555' ></box-icon>
                <span className="item-total-prod">0</span>
            </div>
        </header>
    )
}
