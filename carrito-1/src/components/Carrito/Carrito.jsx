import ImgP from "../../images/img05.jpg"
import "./Carrito.css"
import { DataContext } from "../../context/DataProvider"
import { useContext } from "react"

const Carrito = () => {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [carrito, setCarrito] = value.carrito
    const [total] = value.total

    const ocultarMenu = ()=>{
        setMenu(false);
    }

    const restaProducto = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad ===1 ? item.cantidad = 1: item.cantidad -= 1;
            }
            setCarrito([...carrito])
        })
    }

    const sumaProducto = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad +=1;
            }
            setCarrito([...carrito])
        })
    }

    const eliminarProducto = id =>{
        if(window.confirm("¿Elíminar producto de carrito?")){
            carrito.forEach((item, index) =>{
                if(item.id === id){
                    item.cantidad = 1;
                    carrito.splice(index,1)
                }
            })
        }
        setCarrito([...carrito])
    }

    const showMenu = menu ? "carrito-contendor show" : "carrito-contendor";
    const showCarritoMenu = menu ? "carrito show" : "carrito";

    return (
        <div className={showMenu}>
            <div className={showCarritoMenu}>
                <div className="carrito__close noselect" onClick={ocultarMenu}>
                    <box-icon name='x'></box-icon>
                </div>

                <h2>Carrito</h2>

                <div className="carrito__center">

                {
                    carrito.length === 0 ? <h2
                    style={{textAlign: 'center', fontSize:'3rem'}}
                    >
                    Carrito Vacío
                    </h2>:

                    carrito.map((producto)=>(
                        <div className="carrito__item noselect" key={producto.id}>
                            <img src={producto.image} alt={producto.title} />
                            <div>
                                <h3>{producto.title}</h3>
                                <p className="precio">$ {producto.price}</p>
                            </div>

                            <div>
                                <box-icon name='up-arrow-alt' onClick={()=>sumaProducto(producto.id)}></box-icon>
                                <p className="cantidad">{producto.cantidad}</p>
                                <box-icon name='down-arrow-alt' onClick={()=>restaProducto(producto.id)}></box-icon>
                            </div>

                            <div className="remove__item" onClick={()=>eliminarProducto(producto.id)}>
                                <box-icon name='trash' ></box-icon>
                            </div>
                        </div>
                    ))
                }

                    <div className="carrito__footer noselect">
                        <h3>Total:${total}</h3>
                        <button className="btn__vender">Pagar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrito
