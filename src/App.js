import { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './components/general/Header/Header';
import Main from './components/general/Main/Main';
import Footer from './components/general/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCartContainer from './components/ItemCartContainer/ItemCartContainer';
import ItemCheckout from './components/ItemCheckout/ItemCheckout';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Error404 from './components/Error404/Error404';

import { CardContext } from './context/CartContext';

import './App.css';


function App() {
  const [data, setData] = useState({
    items: [],
    quantity: 0
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

          <Route exact path="/checkout">
            <ItemCheckout />

          </Route>

          <Route exact path="/about">
            <About />

          </Route>

          <Route exact path="/contact">
            <Contact />

          </Route>

          <Route path="*">
            <Error404 /> 
          </Route>
          {/* Futuras Secciones: Preguntas Frecuentas, Banner o Card Informativo (Envio, Metodos Pago, Etc) */}
      </Switch>
      </Main>

      <Footer />
    </BrowserRouter>
    </CardContext.Provider>
  );
}

export default App;
