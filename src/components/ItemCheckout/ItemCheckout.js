import { useState, useContext } from 'react';
import { Redirect } from "react-router-dom";

import { CardContext } from '../../context/CartContext';

import { getFirestore } from "../../db";
import firebase from "firebase/app";

import './ItemCheckout.css';

const ItemCheckout = () => {
    const [data, setData] = useContext(CardContext);
    const [estatus, setEstatus] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: '',
        numCard: ''
    });
    const [idCompra, setIdCompra] = useState('')
    const db = getFirestore();

    
    const handleChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value 
        })
    }

    const price = () => {
        
        if (data.items.length === 0) return 0
        const array = data.items.map(item => item.qty * item.price )
        let resultado = array.reduce((acu, currentvalue) => acu + currentvalue)
        return resultado;
    }

    const compra = {
        user: formData,
        items: data.items,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        precioTotal: price()
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(data.items)
        if(data.items.length > 0) {
            db.collection('ventas').add(compra)
            .then(({id}) => {
            setEstatus(true)
            setIdCompra(id)
            setData({
                items: [],
                cantidad: 0
            })
            })
            .catch(e => console.log(e));
        }else{
            console.log('Sin productos en el carrito')
        }
    }

    

    return (
        <section className="checkout">
            <div className="container">
                <h2 className="titulo-seccion">Checkout</h2>

                {
                    !estatus ?
                
                <form onSubmit={handleSubmitForm}>
                    <input className="checkout__input" type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" />
                    <input className="checkout__input" type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido" />
                    <input className="checkout__input" type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail" />
                    <input className="checkout__input" type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono" />
                    <input className="checkout__input" type="number" value={formData.numCard} onChange={handleChangeInput} name="numCard" placeholder="Numero de Tarjeta" />
                    
                    <button>Pagar</button>
                </form>
                :
                <p>La compra se realizo correctamente, tu numero de seguimiento es {idCompra}</p>
                }


            </div>
        </section>
    )
}

export default ItemCheckout;