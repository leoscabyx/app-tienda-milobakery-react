import Header from './components/general/Header/Header';
import Main from './components/general/Main/Main';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <>
      <Header/>

      <Main> {/* Contenido Pricipal */}
        <ItemListContainer greeting="Componente ItemListContainer" />
        {/* Futuras Secciones: Preguntas Frecuentas, Contacto, About Us, Banner o Card Informativo (Envio, Metodos Pago, Etc) */}
      </Main>
      
      {/* No he definido informacion aun en el Footer: Redes Sociales, titulo, direccion */}
    </>
  );
}

export default App;
