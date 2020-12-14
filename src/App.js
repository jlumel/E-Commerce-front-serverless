import React from 'react';
import './App.css'
import Home from './components/Home';
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import CartProvider from './context/cartContext'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  
  if (!localStorage.getItem('cart')) {

    localStorage.setItem('cart', '[]')
  }

  return (
    <CartProvider defaultQuantity={0} defaultCart={localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []}>
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
            <Checkout exact path="/checkout" />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
