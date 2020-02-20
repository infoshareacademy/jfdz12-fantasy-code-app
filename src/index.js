import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

var firebaseConfig = {
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
  
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
