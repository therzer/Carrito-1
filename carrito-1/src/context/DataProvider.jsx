import { useEffect, useState, createContext } from "react";
import Data from "../Data.jsx"

export const DataContext = createContext();

export const DataProvider = (props) => {
    const carritoLs = JSON.parse(localStorage.getItem("carrito")) ?? [];

    const [productos, setProductos] = useState([]);
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState(carritoLs);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        const producto = Data.items
        if(producto){
            setProductos(producto)
        }else{
            setProductos([])
        }
        setProductos(producto);
    },[])

    const addCarrito =(id) =>{
        const check = carrito.every(item => {
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(productos => {
                return productos.id === id;
            })
            setCarrito([...carrito, ...data]);
        }else{
            alert("El producto se ha añadido al carrito")
        }
    }

    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(carrito))
    },[carrito])

    useEffect(()=>{
        const getTotal = () =>{
            const res = carrito.reduce((prev, item)=>{
                return prev +  (item.price * item.cantidad)
            },0)
            setTotal(res)
        }
        getTotal();
    },[carrito])

    const value= {
        productos : [productos],
        menu : [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total,setTotal]
    }

    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}