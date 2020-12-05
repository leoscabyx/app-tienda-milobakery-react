import logo from '../../assets/milo-logo.png';
import './Navbar.css';

function Navbar() {
  return (
        <nav className="navbar">
            <a href="#"><img className="navbar__logo" src={logo} alt=""/></a>
            <ul className="navbar__menu">
                <li className="navbar__item"><a className="navbar__enlace" href="#">Tienda</a></li>
                <li className="navbar__item"><a className="navbar__enlace" href="#">Sobre Nosotros</a></li>
                <li className="navbar__item"><a className="navbar__enlace" href="#">Contacto</a></li>
                
            </ul>
        </nav>
  );
}

export default Navbar;