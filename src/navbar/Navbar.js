import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Links from './Links';
// import {HomePage} from '';
// import {Page1} from '';
// import {Page2} from '';
// import {Page3} from '';


export default function Navbar() {
  return (
    <BrowserRouter>
      <Links/>
      <Switch>
        {/* <Route
          path="/page/1"
          component={Page1}
        />
        <Route
          path="/page/2"
          component={Page2}
        />
        <Route
          path="/page/3"
          component={Page3}
        />
        <Route
          path="/"
          exact
          component={HomePage}
        /> */}
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
}
