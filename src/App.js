import React from 'react';
import Navbar from './navbar/Navbar';
import Links from './navbar/Links';
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Links />
    </Router>
  );
}

export default App;
