import { useState } from "react";

import './ItemCount.css'

function ItemCount({stock, initial, action}) {

    const [cantidad, setCantidad] = useState(initial);

    const Incrementar = () => {
        if(cantidad < stock && stock > 0) {
            setCantidad(cantidad + 1);
        };
    };

    const Decrementar = () => {
        if(cantidad > 1) {
            setCantidad(cantidad - 1);
        };
    };

/*     const onAdd = () => {
      if (stock >= cantidad) {
        console.log(`Se ha agregado al carrito ${cantidad} productos`)
        setConfirmacion(true)
      }else{
        console.log(`No hay stock disponible`)
      }
    } */



    return (
      <div className="itemCount">
        <div className="itemCount__controles">
          <button onClick={Decrementar} className="itemCount__btn itemCount__btn--decrementar">-</button>
          <input className="itemCount__input" type="number" name="cantidad" value={cantidad} />
          <button onClick={Incrementar} className="itemCount__btn itemCount__btn--incrementar">+</button>
        </div>
        <button onClick={() => {action(cantidad)}} className="itemCount__btn itemCount__btn--agregar">Agregar al Carrito</button>

      </div>
    );
  }
  
export default ItemCount;