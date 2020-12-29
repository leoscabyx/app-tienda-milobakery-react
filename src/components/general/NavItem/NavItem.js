import { Link } from "react-router-dom";

function NavItem({ url = '#', texto }) {

    return (

            <li className="navbar__item"><Link className="navbar__enlace" to={url}>{texto}</Link></li>

    );
  }
  
  export default NavItem;