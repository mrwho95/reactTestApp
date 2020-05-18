import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyABlpZfx2bAR0MOVJ5phYObDg5IZNutnqc",
  authDomain: "reacttestapp-353aa.firebaseapp.com",
  databaseURL: "https://reacttestapp-353aa.firebaseio.com",
  projectId: "reacttestapp-353aa",
  storageBucket: "reacttestapp-353aa.appspot.com",
  messagingSenderId: "538116781935",
  appId: "1:538116781935:web:55565f1e00948930735a9a",
  measurementId: "G-6TZ3Q0Z9QB",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore.settings({ timestampsInSnapshots: true });

export default firebase;
