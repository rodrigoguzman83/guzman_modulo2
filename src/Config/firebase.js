import firebase from "firebase";

//initialize firebase
var firebaseConfig = {
  apiKey: "AIzaSyCZ3emFOgmn9Gfp2Z5ySfCY_Ud20bQefRU",
  authDomain: "react-utn-3bc04.firebaseapp.com",
  projectId: "react-utn-3bc04",
  storageBucket: "react-utn-3bc04.appspot.com",
  messagingSenderId: "548764276170",
  appId: "1:548764276170:web:6d2aa88a0f9a2d8efd2b33",
  measurementId: "G-L203CQPR19",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
