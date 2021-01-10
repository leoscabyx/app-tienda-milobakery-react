import Item from '../Item/Item';

import './ItemList.css'

function ItemList({items}) {
    /* console.log(items) */

    return (
      <div className="itemList">

            {
                items.map((item) => (

                        <Item
                            key={item.id}
                            id={item.id}
                            title={item.title} 
                            price={item.price}
                            pictureUrl={item.pictureUrl}
                            description={item.description}
                            stock={item.stock}
                        />

                ))
            }

      </div>
    );
}
  
export default ItemList;