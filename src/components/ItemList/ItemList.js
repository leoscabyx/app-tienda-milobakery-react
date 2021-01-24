import Item from '../Item/Item';

import './ItemList.css'

function ItemList({items}) {

    return (
      <div className="itemList">

            {
                items.map((item) => (

                        <Item
                            key={item.id}
                            id={item.id}
                            title={item.data.title} 
                            price={item.data.price}
                            pictureUrl={item.data.pictureUrl}
                            description={item.data.description}
                            stock={item.data.stock}
                        />

                ))
            }

      </div>
    );
}
  
export default ItemList;