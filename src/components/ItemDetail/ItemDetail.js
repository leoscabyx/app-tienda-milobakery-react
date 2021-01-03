import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail({data}) {
    const {stock,title, description, price, pictureUrl} = data
    /* console.log(typeof data) */
    return (
      <div className="itemDetail">

          <div className="itemDetail__header">
                <img className="itemDetail__img" src={pictureUrl} alt={title}/>
          </div>
          <div className="itemDetail__body">
                <h3>{title}</h3>
                <p>{description}</p>
                <hr/>
                <span>{price}</span>
          </div>
          <div className="itemDetail__footer">
            <ItemCount stock={stock} initial={1}/>
          </div>

      </div>
    );
}
  
export default ItemDetail;