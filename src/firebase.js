import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  var firebaseConfig = {
    apiKey: "AIzaSyAjc8N01rkgBLLvEpsA5KQWNePr3L9kmV4",
    authDomain: "lenos-y-carbon.firebaseapp.com",
    projectId: "lenos-y-carbon",
    storageBucket: "lenos-y-carbon.appspot.com",
    messagingSenderId: "401978746003",
    appId: "1:401978746003:web:6d324a21dd62ae82af5966",
    measurementId: "G-VWGG1B7TQ9"
  };

  const fire = firebase.initializeApp(firebaseConfig);
 export const db = fire.firestore();
  const auth = fire.auth()

  export { auth }

