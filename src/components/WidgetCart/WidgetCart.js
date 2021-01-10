import { useContext } from 'react';
import { Link } from "react-router-dom";

import { CardContext } from "../../context/CartContext";

import './WidgetCart.css';

const WidgetCart = ({show, action}) => {
    const [data, setData] = useContext(CardContext);


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

        console.log(datosFiltadros, itemEliminar)
        setData({
            ...data,
            cantidad: data.cantidad - itemEliminar.qty,
            items: [...datosFiltadros]
        })
    }

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <h2>Carrito de compras</h2>
            <div className="widgetCart__body">
            {
                data.items.map(item => (
                    <div className="widgetCartItem">
                        
                        <div className="widgetCartItem__info">
                            <img className="widgetCartItem__img" src={item.pictureUrl} alt="imagen"/>
                            <h4 className="widgetCartItem__title">{item.title}</h4>
                            <span className="widgetCartItem__qty">{item.qty}</span>
                            <button className="widgetCartItem__eliminar" onClick={() => removeItem(item.id)}>X</button>
                        </div>
                        
                    </div>
                    
                ))
            }
            </div>

            <div className="widgetCart__footer">
            { !!data.cantidad && ( <Link  className="widgetCartItem__cart" to="/cart">Detalle de Compra</Link>)}             
                <div>
                { !!data.cantidad && (<button className="widgetCartItem__clean" onClick={() => clearCart()}>Vaciar Carrito</button>)}
                    <button className="widgetCartItem__close" onClick={action}>Cerrar widget</button>
                </div>
            </div>
        </div>
    )
}
export default WidgetCart;