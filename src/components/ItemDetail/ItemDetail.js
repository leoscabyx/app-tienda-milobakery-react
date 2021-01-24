import { useContext } from "react";
import { useHistory } from 'react-router-dom';

import { CardContext } from "../../context/CartContext";

import ItemCount from '../ItemCount/ItemCount';

import './ItemDetail.css';

function ItemDetail({item}) {

    const history = useHistory();
    const [data, setData] = useContext(CardContext);
    const {stock,title, description, price, pictureUrl} = item


    const onAdd = (quantity) => {
      if (stock >= quantity) {
        const productoInCart = data.items.find((items) => items.id === item.id)

        if(typeof productoInCart === 'undefined') {
          console.log(`Se ha agregado al carrito ${quantity} productos`)
          setData({
            ...data,
            quantity: data.quantity + quantity,
            items: [...data.items, {...item, qty: quantity}]
          })
        }else{ 
          productoInCart.qty += quantity
          setData({
            ...data,
            quantity: data.quantity + quantity,
          })
          console.log(`Se ha actualizo al carrito ${quantity} productos`);

        }
        history.push('/cart');

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