import React from 'react';
import './App.css';
import {Navbar} from './navbar/index';
import {FavouriteListOfGames} from './profil/Personal-info/favourite-games';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route 
          path="/profil/personal/favourite-games"
          component={FavouriteListOfGames}
        />
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
