import React from 'react';
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import firebaseConfig from './firebase/firebaseConfig';
import * as firebase from 'firebase/app';
import 'firebase/auth';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => { this.setState({ user }) });
  } 

  render() {
    return (
    <Router>
      <Navbar />
    </Router>
    )
  }
}

export default App;