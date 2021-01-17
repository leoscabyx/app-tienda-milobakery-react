import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';

// import { productos } from "../../products";
import { getFirestore } from "../../db";

function ItemDetailContainer() {

    const { id } = useParams();

    const [item, setItem] = useState({});

    const db = getFirestore();



    useEffect(() => {
        db.collection('productos').doc(id).get()
        .then(doc => {
            if (doc.exists) {
                setItem(doc.data())
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <section>
        <div className="container">
        {
            Object.keys(item).length !== 0 ?
            <>
                <h2 className="titulo-seccion">Detalle del Producto N° - {item.id}</h2>
                <ItemDetail item={item}/>
            </> :
                <p className="cargando">Cargando items...</p>
        }


        </div>

      </section>
    );
}
  
export default ItemDetailContainer;