// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOnVpmmGVVML3Khbx4Si-OdDMRF-cLqa0",
  authDomain: "loginrn-82099.firebaseapp.com",
  projectId: "loginrn-82099",
  storageBucket: "loginrn-82099.appspot.com",
  messagingSenderId: "80242149447",
  appId: "1:80242149447:web:3b2db57228542990c88962"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();