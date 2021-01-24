import { useState } from "react";

import './ItemCount.css'

function ItemCount({stock, initial, action}) {

    const [quantity, setQuantity] = useState(initial);

    const Incrementar = () => {
        if(quantity < stock && stock > 0) {
            setQuantity(quantity + 1);
        };
    };

    const Decrementar = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        };
    };

    return (
      <div className="itemCount">
        <div className="itemCount__controles">
          <button onClick={Decrementar} className="itemCount__btn itemCount__btn--decrementar">-</button>
          <input className="itemCount__input" type="number" name="cantidad" value={quantity} />
          <button onClick={Incrementar} className="itemCount__btn itemCount__btn--incrementar">+</button>
        </div>
        <button onClick={() => {action(quantity)}} className="itemCount__btn itemCount__btn--agregar">Agregar al Carrito</button>

      </div>
    );
}
  
export default ItemCount;