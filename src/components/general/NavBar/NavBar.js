import CartWidget from '../../CartWidget/CartWidget';
import NavItem from '../NavItem/NavItem';
import { Link } from "react-router-dom";

import logo from '../../../assets/milo-logo.png';
import './NavBar.css';


function NavBar() {

  const menuItems = [
    {
      texto: 'Roll Cake',
      ruta: '/category/roll-cake'
    },
    {
      texto: 'Cinnamon Rolls',
      ruta: '/category/cinnamon-rolls'
    },
    {
      texto: 'Pan de Jamon',
      ruta: '/category/pan-de-jamon'
    }
  ]
  return (
        <nav className="navbar">
            <Link to="/"><img className="navbar__logo" src={logo} alt=""/></Link>
            <ul className="navbar__menu">

              {
                menuItems.map((category, index) => <NavItem key={index} texto={category.texto} url={category.ruta} />)

              }

                <li className="navbar__item"><a className="navbar__enlace" href="#">Sobre Nosotros</a></li>
                <li className="navbar__item"><a className="navbar__enlace" href="#">Contacto</a></li>
                <li className="navbar__item"><a className="navbar__enlace" href="#"><CartWidget/></a></li>
            </ul>
        </nav>
  );
}

export default NavBar;