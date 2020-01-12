import React from 'react';
<<<<<<< HEAD
import {GameCard} from "./menu/games/index";
import  Home  from './menu/home/Home';
=======
import Navbar from './navbar/Navbar';
import Links from './navbar/Links';
import {BrowserRouter as Router} from "react-router-dom";
>>>>>>> fe551279d8bf762292fcaabfb58028ddce29d7a8


function App() {
  return (
    <Router>
      <Navbar />
      <Links />
    </Router>
  );
}

export default App;
