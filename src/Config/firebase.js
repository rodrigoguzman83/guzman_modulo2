import firebase from "firebase";

//initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyCZ3emFOgmn9Gfp2Z5ySfCY_Ud20bQefRU",
  authDomain: "react-utn-3bc04.firebaseapp.com",
  databaseURL: "https://react-utn-3bc04-default-rtdb.firebaseio.com",
  projectId: "react-utn-3bc04",
  storageBucket: "react-utn-3bc04.appspot.com",
  messagingSenderId: "548764276170",
  appId: "1:548764276170:web:962a5821fbd2ac86fd2b33",
  measurementId: "G-LT4B2BJ2HY",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.db = db;
export default firebase;
