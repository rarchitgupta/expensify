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

database.ref().set({
  name: "Archit Gupta",
  age: "20",
  location: {
    city: "Mumbai",
    country: "India"
  }
}).then(()=>{
  console.log("Data is saved");
}).catch((error)=>{
  console.log(error);
})

database.ref('age').set(21);
database.ref('location/city').set("Delhi");
database.ref('attributes').set({
  height: 178,
  weight: 65
});
