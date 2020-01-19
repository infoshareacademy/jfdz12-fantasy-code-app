import React from 'react';
import {Switch, Route} from 'react-router';
import { GameCardColection } from "../menu/games/index";
import Home from '../menu/home/Home';

export default () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/games">
            <GameCardColection />
        </Route>
    </Switch>
)