import React from 'react';
import './App.css'
import Home from './components/Home';
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
