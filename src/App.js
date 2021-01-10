import { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './components/general/Header/Header';
import Main from './components/general/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCartContainer from './components/ItemCartContainer/ItemCartContainer';

import { CardContext } from './context/CartContext';

import './App.css';

function App() {
  const [data, setData] = useState({
    items: [],
    cantidad: 0
  })

  return (
    <CardContext.Provider value={[data, setData]}>
    <BrowserRouter>
      <Header/>

      <Main> {/* Contenido Pricipal */}
        <Switch>
          <Route exact path="/">
            <ItemListContainer />

          </Route>
          <Route exact path="/category/:category_name">
            <ItemListContainer />

          </Route>

          <Route exact path="/detail/:id">
            <ItemDetailContainer />

          </Route>

          <Route exact path="/cart">
            <ItemCartContainer />

          </Route>

          <Route path="*">
            <h3 className="error404">Recurso NO disponible...</h3> {/* Luego creare el componente Error404 y lo estilizo mejor xD */}
          </Route>
          {/* Futuras Secciones: Preguntas Frecuentas, Contacto, About Us, Banner o Card Informativo (Envio, Metodos Pago, Etc) */}
      </Switch>
      </Main>

      {/* No he definido informacion aun en el Footer: Redes Sociales, titulo, direccion */}
    </BrowserRouter>
    </CardContext.Provider>
  );
}

export default App;
