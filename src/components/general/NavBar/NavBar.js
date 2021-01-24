import { useState } from 'react';
import { Link } from "react-router-dom";

import CardIcon from '../../CardIcon/CardIcon';
import NavItem from '../NavItem/NavItem';
import WidgetCart from '../../WidgetCart/WidgetCart';


import logo from '../../../assets/milo-logo.png';
import './NavBar.css';


function NavBar() {

  const navItems = [
    {
      text: 'Roll Cake',
      url: '/category/roll-cake'
    },
    {
      text: 'Cinnamon Rolls',
      url: '/category/cinnamon-rolls'
    },
    {
      text: 'Pan de Jamon',
      url: '/category/pan-de-jamon'
    }
  ];

  const [showWidgetCart, setShowWidgetCart] = useState(false);

  const openWidgetCart = () => {
      setShowWidgetCart(!showWidgetCart);
  }

  return (
        <>
        <nav className="navbar">
            <Link to="/"><img className="navbar__logo" src={logo} alt="Logotipo Milobakery"/></Link>
            <ul className="navbar__menu">

              {
                navItems.map((category, index) => <NavItem key={index} text={category.text} url={category.url} />)

              }

                <li className="navbar__item"><Link className="navbar__enlace" to="/about">Sobre Nosotros</Link></li>
                <li className="navbar__item"><Link className="navbar__enlace" to="/contact">Contacto</Link></li>
                
            </ul>

            <CardIcon action={openWidgetCart} />
        </nav>
        <WidgetCart show={showWidgetCart} action={openWidgetCart} />
        </>
  );
}

export default NavBar;