import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';

import { productos } from "../../products";

function ItemDetailContainer() {

    const { id } = useParams();

    const [item, setItem] = useState({});


    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            const [producto] = productos.filter((item) => item.id == id);
            /* console.log(producto) */
            resolve(producto);
            
        }, 1000)
    })

    useEffect(() => {
        
        getItem.then(rta => {
            /* console.log(rta) */
            setItem({...rta}) 
            /* console.table(item)  */
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <section>
        <div className="container">
        {
            Object.keys(item).length !== 0 ?
            <>
                <h2 className="titulo-seccion">Detalle del Producto N° - {id}</h2>
                <ItemDetail item={item}/>
            </> :
                <p className="cargando">Cargando items...</p>
        }


        </div>

      </section>
    );
}
  
export default ItemDetailContainer;