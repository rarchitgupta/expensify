import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDJPOILomvcq3c6qz3Ez6wZFVr-XGKc_MI",
    authDomain: "expensifymanager.firebaseapp.com",
    databaseURL: "https://expensifymanager.firebaseio.com",
    projectId: "expensifymanager",
    storageBucket: "expensifymanager.appspot.com",
    messagingSenderId: "957053686640",
    appId: "1:957053686640:web:910635d6e796c216a235b5",
    measurementId: "G-4B25ZMW310"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };