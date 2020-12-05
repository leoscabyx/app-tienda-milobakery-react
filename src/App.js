import Navbar from './components/general/Navbar';
import './App.css';

function App() {
  return (
    
      <header className="app-header">
        <Navbar/>
        <div className="app-header__info">

            <h1>Milobakery</h1>
            <span>Cinnamon Rolls & Bakery</span>
          
          {/* Colocar imagen de roles de canela */}
        </div>
        
      </header>

  );
}

export default App;
