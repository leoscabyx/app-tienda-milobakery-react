import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { CardContext } from "../../context/CartContext";

import './ItemCartContainer.css';
import imgCart from '../../assets/imgCart.svg';

function ItemCartContainer() {
    
    const [data, setData] = useContext(CardContext);
    const [montoTotal, setMontoTotal] = useState(0)

    const clearCart = () => {
        /* console.log(data) */
        setData({
            cantidad: 0,
            items: []
        })
        console.log(`Se ha eliminado todos los productos del carrito`)
    }

    const removeItem = (itemDelete) => {
        console.log(itemDelete)
        const itemEliminar = data.items.find(producto => producto.id === itemDelete);
        const datosFiltadros = data.items.filter((producto) => producto.id !== itemDelete)


        setData({
            ...data,
            cantidad: data.cantidad - itemEliminar.qty,
            items: [...datosFiltadros]
        })
    }

    const calcularTotal = () => {
        if (data.items.length === 0) return null
        const array = data.items.map(item => item.qty * item.price )

        let resultado = array.reduce((acu, currentvalue) => acu + currentvalue)
        setMontoTotal(resultado) 
        
    }

    useEffect(() => {
        calcularTotal()
    }, [montoTotal])
    
    return (
        <div className="ItemCartContainer">
            <h2>Carrito de compras</h2>
            { !!data.cantidad && <h3>Cantidad de items {data.cantidad}</h3>}
            {
                data.items.length > 0 ?
                data.items.map(item => 
                    (
                    <div className="widgetCartItem">
                        
                        <div className="widgetCartItem__info">
                            <img className="widgetCartItem__img" src={item.pictureUrl} alt="imagen"/>
                            <h4 className="widgetCartItem__title">{item.title} - {item.description}</h4>
                            <span className="widgetCartItem__qty">{item.qty} x {item.price}  $</span>
                            <button className="widgetCartItem__eliminar" onClick={() => removeItem(item.id)}>X</button>
                        </div>
                        
                    </div>
                    )
                )
                :
                <div className="CartEmpty">
                    <h4>Ups...! No se han agregado productos</h4>
                    <div>
                        <img src={imgCart} alt="Carrito Vacio"/>
                    </div>
                    <Link to="/">Ir a Productos Destacados</Link>    
                </div>
            }

            { !!data.cantidad && (
                <>
                <h3>Monto Total:  {montoTotal}</h3>
                <div className="ItemCartFooter">
                    <button className="" onClick={() => clearCart()}>Vaciar Carrito</button>
                    <button>Procesar Compra</button>
                </div>
                </>
            )}
        </div>
    );
};

export default ItemCartContainer;