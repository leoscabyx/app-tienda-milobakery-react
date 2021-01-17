import { useContext } from "react";
import {useHistory} from 'react-router-dom';

import { CardContext } from "../../context/CartContext";

import ItemCount from '../ItemCount/ItemCount';

import './ItemDetail.css';

function ItemDetail({item}) {

    const history = useHistory();
    const [data, setData] = useContext(CardContext);
    const {stock,title, description, price, pictureUrl} = item

    

    const onAdd = (cantidad) => {
      if (stock >= cantidad) {
        const productoInCart = data.items.find((items) => items.id === item.id)
        console.log(productoInCart)
        if(typeof productoInCart === 'undefined') {
          console.log(`Se ha agregado al carrito ${cantidad} productos`)
          setData({
            ...data,
            cantidad: data.cantidad + cantidad,
            items: [...data.items, {...item, qty: cantidad}]
          })
        }else{ 
          productoInCart.qty += cantidad
          setData({
            ...data,
            cantidad: data.cantidad + cantidad,
          })
          console.log(`Se ha actualizo al carrito ${cantidad} productos`);

        }
        history.push('/cart');
        /* setData({...data, [...data.items, {...obj, qty: 11}]}) */
      }else{
        console.log(`No hay stock disponible`)
      }
    }
    
    return (
      <div className="itemDetail">

          <div className="itemDetail__header">
                <img className="itemDetail__img" src={`/productos/${pictureUrl}`} alt={title}/>
          </div>
          <div className="itemDetail__body">
                <h3>{title}</h3>
                <p>{description}</p>
                <hr/>
                <span>{price}</span>
          </div>
          <div className="itemDetail__footer">
            <ItemCount stock={stock} initial={1} action={onAdd} />
          </div>

      </div>
    );
}
  
export default ItemDetail;