import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Links from './Links';
import {Home} from '../menu/home/index';
import Games from '../menu/games/index';
import {FavouriteListOfGames} from '../profil/Personal-info/favourite-games';
// import {PlayerList} from '';


export default function Navbar() {
  return (
    <BrowserRouter>
      <Links/>
      <Switch>
        <Route
          path="/games"
          component={Games}
        />
        <Route
          path="/profile"
          component={FavouriteListOfGames}
        />
        <Route
          path="/"
          exact
          component={Home}
        />
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
}
