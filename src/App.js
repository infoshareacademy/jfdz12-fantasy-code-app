import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import Navbar from './navbar/Navbar';
import Links from './navbar/Links';

function App() {
  return (
    <Router>
      <Navbar />
      <Links />
    </Router>
  );
};

export default App;