import firebase from "firebase/app";
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: process.env.APY_KEY,
    authDomain: "milobakery-ch.firebaseapp.com",
    projectId: "milobakery-ch",
    storageBucket: "milobakery-ch.appspot.com",
    messagingSenderId: "1034339172584",
    appId: "1:1034339172584:web:7223236eb4720520aa895d"
  });

  export function getFirebase() {
      return app;
  }

  export function getFirestore() {
      return firebase.firestore(app);
  }