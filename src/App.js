import React from 'react';
import Navbar from './navbar/Navbar';
import {BrowserRouter as Router} from "react-router-dom";
import "./style.css"

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;