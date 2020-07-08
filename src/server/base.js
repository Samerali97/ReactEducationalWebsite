import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCr17myF7fvkopL8OwiY2FhfTUeu-hB8Gs",
    authDomain: "website-34b5a.firebaseapp.com",
    databaseURL: "https://website-34b5a.firebaseio.com",
    projectId: "website-34b5a",
    storageBucket: "website-34b5a.appspot.com",
    messagingSenderId: "805837581453",
    appId: "1:805837581453:web:c0f016b3172f612f4486c4",
    measurementId: "G-5RK9KG6KB9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();