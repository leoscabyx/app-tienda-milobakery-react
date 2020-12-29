import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {

    const { id } = useParams();

    const [item, setItem] = useState({});

    const productos = [
        {
            id: 1,
            title: 'Frutos Rojos',
            price: 330,
            pictureUrl: 'https://s3.amazonaws.com/storage.wobiz.com/187/187140/images/Large/1603839745_f4b03669849e6e00b3af6a320c438072.187140.jpeg',
            description: 'Cinamon Rolls',
            stock: 100,
            category: 'cinnamon-rolls'
            
        },
        {
            id: 2,
            title: 'Roll Cake Tradicional',
            price: 1100,
            pictureUrl: 'https://s3.amazonaws.com/storage.wobiz.com/187/187140/images/Large/1604432998_5a3a15798cf2f8b98a9598cc43a0291b.187140.jpeg',
            description: 'Roll Cake',
            stock: 5,
            category: 'roll-cake'
        },
        {
            id: 3,
            title: 'Pan de Jamon Tradicional',
            price: 330,
            pictureUrl: 'https://s3.amazonaws.com/storage.wobiz.com/187/187140/images/Large/1604070688_ad6a0cf45d2b2488a8afacf12cf9b5b3.187140.jpeg',
            description: 'Pan de Jamon Tradicional',
            stock: 10,
            category: 'pan-de-jamon'
        },
        {
          id: 4,
          title: 'Pan de Jamon Especial',
          price: 330,
          pictureUrl: 'https://s3.amazonaws.com/storage.wobiz.com/187/187140/images/Large/1604070688_ad6a0cf45d2b2488a8afacf12cf9b5b3.187140.jpeg',
          description: 'Pan de Jamon Especial',
          stock: 10,
          category: 'pan-de-jamon'
      },
      {
        id: 5,
        title: 'Pan de Jamon Extra',
        price: 330,
        pictureUrl: 'https://s3.amazonaws.com/storage.wobiz.com/187/187140/images/Large/1604070688_ad6a0cf45d2b2488a8afacf12cf9b5b3.187140.jpeg',
        description: 'Pan de Jamon Extra',
        stock: 10,
        category: 'pan-de-jamon'
      }
  
    ];

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            const [producto] = productos.filter((item) => item.id == id);
            /* console.log(producto) */
            resolve(producto);
            
        }, 2000)
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
                <ItemDetail data={item}/>
            </> :
                <p className="cargando">Cargando items...</p>
        }


        </div>

      </section>
    );
}
  
export default ItemDetailContainer;