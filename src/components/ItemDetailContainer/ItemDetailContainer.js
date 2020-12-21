import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {

    const [item, setItem] = useState({});

    const producto = {
          id: 1,
          title: 'Frutos Rojos',
          price: 330,
          pictureUrl: 'https://s3.amazonaws.com/storage.wobiz.com/187/187140/images/Large/1603839745_f4b03669849e6e00b3af6a320c438072.187140.jpeg',
          description: 'Cinamon Rolls',
          stock: 100  
    }

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(producto);
        }, 2000)
    })

    useEffect(() => {
        
        getItem.then(rta => {
            /* console.log(rta) */
            setItem({...rta}) 
            console.table(item) 
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <section>
        <div className="container">
        {
            Object.keys(item).length !== 0 ?
            <>
                <h2 className="titulo-seccion">Detalle del Producto</h2>
                <ItemDetail data={item}/>
            </> :
                <p className="cargando">Cargando items...</p>
        }


        </div>

      </section>
    );
}
  
export default ItemDetailContainer;