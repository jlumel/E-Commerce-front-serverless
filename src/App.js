import React from 'react';
import './App.css'
import Home from './components/Home';
import NavBar from './components/NavBar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/item/:id">

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
