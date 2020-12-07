import NavBar from '../NavBar/NavBar';
import InfoContainer from '../InfoContainer/InfoContainer'

import './Header.css';

function Header() {
  return (
    <header  className="app-header">
        <NavBar/>
        <InfoContainer />
    </header>
  );
}

export default Header;