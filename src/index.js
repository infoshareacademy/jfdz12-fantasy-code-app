import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import firebase from "firebase"


  // Your web app's Firebase configuration
  var firebaseConfig = {
=======
import firebase from 'firebase';

var firebaseConfig = {
>>>>>>> b691989685111dc87693cd168912a011a3b60d56
    apiKey: "AIzaSyCZpkhY-UUq27S_GferQx06LjUSvoCHXrk",
    authDomain: "fantasyapp-9473b.firebaseapp.com",
    databaseURL: "https://fantasyapp-9473b.firebaseio.com",
    projectId: "fantasyapp-9473b",
    storageBucket: "fantasyapp-9473b.appspot.com",
    messagingSenderId: "521438178228",
    appId: "1:521438178228:web:3970e009265778728b60e1",
    measurementId: "G-EP1ZJ1HTXV"
  };
  // Initialize Firebase
<<<<<<< HEAD
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

=======
  
firebase.initializeApp(firebaseConfig);
>>>>>>> b691989685111dc87693cd168912a011a3b60d56

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
