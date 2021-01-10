import { Link } from "react-router-dom";
/* import ItemCount from '../ItemCount/ItemCount'; */

import './Item.css'

function Item({id, stock, title, description, price, pictureUrl}) {
    return (
      <div className="item">
          <div className="item__header">
            <img src={pictureUrl} alt=""/>
          </div>
          <div className="item__body">
            <h3>{title}</h3>
            <span>{price}</span>
            <p>{description}</p>
          </div>
          {/* <div className="item_footer">
            <ItemCount stock={stock} initial={1}/>
          </div> */}
          <Link to={`/detail/${id}`}>Ver más</Link>
      </div>
    );
}
  
export default Item;