import React from 'react';
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import firebaseConfig from './firebase/firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = firebase.auth.EmailAuthProvider.credential(
  email,
  password
);

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
    <Router>
      <Navbar />
    </Router>
    )
  }
}


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);