import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';

function ItemListContainer() {

  const [items, setItems] = useState([]);

  const productos = [
      {
          id: 1,
          title: 'Frutos Rojos',
          price: 330,
          pictureUrl: 'https://s3.amazonaws.com/storage.wobiz.com/187/187140/images/Large/1603839745_f4b03669849e6e00b3af6a320c438072.187140.jpeg',
          description: 'Cinamon Rolls',
          stock: 100
          
      },
      {
          id: 2,
          title: 'Roll Cake Tradicional',
          price: 1100,
          pictureUrl: 'https://s3.amazonaws.com/storage.wobiz.com/187/187140/images/Large/1604432998_5a3a15798cf2f8b98a9598cc43a0291b.187140.jpeg',
          description: 'Roll Cake',
          stock: 5
      },
      {
          id: 3,
          title: 'Pan de Jamon Tradicional',
          price: 330,
          pictureUrl: 'https://s3.amazonaws.com/storage.wobiz.com/187/187140/images/Large/1604070688_ad6a0cf45d2b2488a8afacf12cf9b5b3.187140.jpeg',
          description: 'Pan de Jamon',
          stock: 10
      },
      {
        id: 3,
        title: 'Pan de Jamon Tradicional',
        price: 330,
        pictureUrl: 'https://s3.amazonaws.com/storage.wobiz.com/187/187140/images/Large/1604070688_ad6a0cf45d2b2488a8afacf12cf9b5b3.187140.jpeg',
        description: 'Pan de Jamon',
        stock: 10
    },
    {
      id: 3,
      title: 'Pan de Jamon Tradicional',
      price: 330,
      pictureUrl: 'https://s3.amazonaws.com/storage.wobiz.com/187/187140/images/Large/1604070688_ad6a0cf45d2b2488a8afacf12cf9b5b3.187140.jpeg',
      description: 'Pan de Jamon',
      stock: 10
    }

  ]

  const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(productos);
      }, 3000)
  })

  useEffect(() => {
      getProducts.then(rta => setItems(rta));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
      <section>
        <div className="container">
          {
            items.length ?
          <>
            <h2 className="titulo-seccion">Productos destacados</h2>
            <ItemList items={items}/>
            
          </> :
            <p className="cargando">Cargando items...</p>
          }
        </div>

      </section>
    );
}
  
export default ItemListContainer;