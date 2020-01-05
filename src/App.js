import React from 'react';
import './App.css';
import GameCard from "./menu/games/index";
import { Home } from './menu/home/index';
import Navbar from "./navbar/Navbar";
function App() {
  return (
    <div >
      <Navbar />
      <GameCard/>
      <Home />

    </div>
  );
}

export default App;
