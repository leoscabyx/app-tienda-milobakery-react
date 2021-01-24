import { useState, useContext } from 'react';

import Loader from '../general/Loader/Loader';

import { CardContext } from '../../context/CartContext';

import { getFirestore } from "../../db";
import firebase from "firebase/app";

import './ItemCheckout.css';

const ItemCheckout = () => {
    const [data, setData] = useContext(CardContext);
    const [status, setStatus] = useState(false);
    const [mailError, setMailError] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        emailConfirm: '',
        tel: '',
        numCard: ''
    });
    const [orderID, setOrderID] = useState('')
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
        let result = array.reduce((acu, currentvalue) => acu + currentvalue)
        return result;
    }

    const infoDetail = {
        user: formData,
        items: data.items,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        priceTotal: price()
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(data.items)
        if (formData.email !== formData.emailConfirm) {
            setMailError(true)
            return
        }else{
            setMailError(false)
        }
        if (data.items.length > 0 && !Object.values(formData).includes('')) {

            db.collection('ventas').add(infoDetail)
            .then(({id}) => {
            setStatus(true)
            setOrderID(id)
            setData({
                items: [],
                quantity: 0
            })
            })
            .catch(e => console.log(e));
        }else{
            console.log('No se pudo procesar la compra, intente de nuevo')
        }
    }

    

    return (
        <section className="checkout">
            <div className="container">
                <h2 className="titulo-seccion">Checkout</h2>

                {
                    !status ?
                
                <>
                { (mailError) ? <div className="alert alert--warning">❌ NO coincide el email de confirmacion</div> : '' }
                <form onSubmit={handleSubmitForm} autoComplete="off">
                    <input className="checkout__input" type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" required />
                    <input className="checkout__input" type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido" required />
                    <input className="checkout__input" type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail" required />
                    <input className="checkout__input checkout__input--email" type="email" value={formData.emailConfirm} onChange={handleChangeInput} name="emailConfirm" placeholder="Confirmar E-mail" required />
                    <input className="checkout__input" type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono" required />
                    <input className="checkout__input" type="number" value={formData.numCard} onChange={handleChangeInput} name="numCard" placeholder="Numero de Tarjeta" required />
                    
                    <button>Pagar</button>
                </form>
                </>
                :
                 !orderID ? 
                    <Loader />
                 :
                    <div className="alert">La compra se realizo correctamente 🙌, tu numero de seguimiento es <span>{orderID}</span></div>
                }


            </div>
        </section>
    )
}

export default ItemCheckout;