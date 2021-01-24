import Title from '../Title/Title';
import rollCanela from '../../../assets/roles-canela.png';
import './InfoContainer.css';

function InfoContainer() {
  return (
    <div className="info-container">
        <div>
            <Title text="Milobakery"/>
            <span>Cinnamon Rolls & Bakery</span>
        </div>

        <div>
            <img className="info-container__img" src={rollCanela} alt="Roll Canela"/>
        </div>
    </div>
  );
}

export default InfoContainer;