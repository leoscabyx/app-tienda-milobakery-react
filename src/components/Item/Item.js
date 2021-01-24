import { Link } from "react-router-dom";

import './Item.css'

function Item({id, stock, title, description, price, pictureUrl}) {
    return (
      <div className="item">
          <div className="item__header">
            <img src={`/productos/${pictureUrl}`} alt={title}/>
          </div>
          <div className="item__body">
            <h3>{title}</h3>
            <span>{price}</span>
            <p>{description}</p>
          </div>
          <Link to={`/detail/${id}`}>Ver más</Link>
      </div>
    );
}
  
export default Item;