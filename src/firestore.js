import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyCtnPSIIm-Vkns3APJ8QWOeDBy4pWlzQ24",
    authDomain: "fb-counter-3bda3.firebaseapp.com",
    databaseURL: "https://fb-counter-3bda3.firebaseio.com",
    projectId: "fb-counter-3bda3",
    storageBucket: "fb-counter-3bda3.appspot.com",
    messagingSenderId: "295356036375"
  };

firebase.initializeApp(config);
const db = firebase.firestore();
export default db;