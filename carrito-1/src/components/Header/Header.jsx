import React, { useContext } from 'react'
import './Header.css'
import Logo from "../../assets/Nike.jpg"
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/DataProvider'

export default function Header() {

    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;

    const abrirMenmu = ()=>{
        setMenu(!menu)
    }


    return (
        <header>
            <Link to="/" className='logo'>
                <img src={Logo} alt="Logo" />
            </Link>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
            </ul>

            <div className="carrito-i" onClick={abrirMenmu}>
                <box-icon name='cart' color='#555555' ></box-icon>
                <span className="item-total-prod">{carrito.length}</span>
            </div>
        </header>
    )
}
