import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCoOIQ10mp25xSH3JJcjIEgS-x3Ls9R1K4",
  authDomain: "habittracker-6e46f.firebaseapp.com",
  projectId: "habittracker-6e46f",
  storageBucket: "habittracker-6e46f.appspot.com",
  messagingSenderId: "244028268397",
  appId: "1:244028268397:web:7f9279d91cecb47f740464"
};

  
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
