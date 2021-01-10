import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList';

import { productos } from "../../products";

function ItemListContainer() {

  const { category_name } = useParams();

  const [items, setItems] = useState([]);

  
  /* console.log(productos) */
  

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

          
      }, 1000)
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