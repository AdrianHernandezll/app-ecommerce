import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';


const titulo = 'MBD Store';

const App = () => {
  return (
    <Router>
      <NavBar />
      <ItemListContainer titulo={titulo} />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>

          <Redirect to="/" />
        </Switch>

      </main>
    </Router>
  );
}

export default App;
