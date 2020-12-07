import Title from '../Title/Title';
import rolesCanela from '../../../assets/roles-canela.png';
import './InfoContainer.css';

function InfoContainer() {
  return (
    <div className="info-container">
        <div>
            <Title text="Milobakery"/>
            <span>Cinnamon Rolls & Bakery</span>
        </div>

        <div>
            <img className="info-container__img" src={rolesCanela} alt="Roles de Canela"/>
        </div>
    </div>
  );
}

export default InfoContainer;