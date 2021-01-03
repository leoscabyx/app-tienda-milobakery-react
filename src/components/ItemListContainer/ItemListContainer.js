import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList';

function ItemListContainer() {

  const { category_name } = useParams();

  const [items, setItems] = useState([]);

  
  /* console.log(id) */
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

  const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        /* console.log(typeof categoryId === 'undefined') */
           if (typeof category_name !== 'undefined') {
                      
              const itemFiltadros = productos.filter((item) => {
                /* console.log(item.category) */
                /* console.log(category_name) */
                return item.category == category_name
          });
            /* console.log(itemFiltadros) */
            resolve(itemFiltadros);
          }else{
            resolve(productos);
          }

          
      }, 1500)
  })

  useEffect(() => {
      getProducts.then(rta => {

        setItems(rta)
        
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
      
  }, [category_name]);

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