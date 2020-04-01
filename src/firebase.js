// import firebase from 'firebase'
import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
require('firebase/firestore')

  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyAsZODLeQ25dUUNq9dt2YYabMItRTncn7U",
    authDomain: "fitness-53c7e.firebaseapp.com",
    databaseURL: "https://fitness-53c7e.firebaseio.com",
    projectId: "fitness-53c7e",
    storageBucket: "fitness-53c7e.appspot.com",
    messagingSenderId: "553251897089",
    appId: "1:553251897089:web:52a7ee21d287519baee500",
    measurementId: "G-3CRY7P55P5"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(config);
 const db = firebase.firestore();

 export {fb,db}