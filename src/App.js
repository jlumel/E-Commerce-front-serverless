import React from 'react';
import './App.css'
import Home from './components/Home';
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import Order from './components/Order'
import CartProvider from './context/cartContext'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  if (!localStorage.getItem('cart')) {

    localStorage.setItem('cart', [])
  }

  const getLocalStorage = () => {
    let suma = 0
    JSON.parse(localStorage.getItem('cart')).map(item => item.quantity).forEach(item => {
      suma += item
    });
      return suma
  }

  return (
    <CartProvider defaultQuantity={localStorage.getItem('cart') ? getLocalStorage() : 0} defaultCart={localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/category/:category">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route>
            <Order exact path="/checkout"/>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
