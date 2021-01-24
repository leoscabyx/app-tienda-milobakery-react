import { Link } from "react-router-dom";

function NavItem({ url = '#', text }) {

    return (
            <li className="navbar__item"><Link className="navbar__enlace" to={url}>{text}</Link></li>
    );
  }
  
  export default NavItem;