/* import './ItemDetail.css' */

function ItemDetail({data}) {
    const {title, description, price, pictureUrl} = data
    console.log(data)
    return (
      <div className="itemDetail">

          <div>
                <img src={pictureUrl} alt={title}/>
          </div>
          <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <hr/>
                <span>{price}</span>
          </div>

      </div>
    );
}
  
export default ItemDetail;