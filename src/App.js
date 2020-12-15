import Header from './components/general/Header/Header';
import Main from './components/general/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import ItemCount from './components/ItemCount/ItemCount';
import './App.css';

function App() {
  return (
    <>
      <Header/>

      <Main> {/* Contenido Pricipal */}
        <ItemListContainer greeting="Componente ItemListContainer" />
        {/* Futuras Secciones: Preguntas Frecuentas, Contacto, About Us, Banner o Card Informativo (Envio, Metodos Pago, Etc) */}
        <ItemCount stock={2} initial={1}/>

        <ItemCount stock={15} initial={1}/>

        <ItemCount stock={10} initial={5}/>

        <ItemCount stock={0} initial={1}/>
      </Main>
      
      {/* No he definido informacion aun en el Footer: Redes Sociales, titulo, direccion */}
    </>
  );
}

export default App;
