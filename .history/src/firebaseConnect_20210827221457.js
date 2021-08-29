// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYwuDMaqjpoxo29MydK5V2BbMtQzi9aNc",
  authDomain: "note-d8357.firebaseapp.com",
  databaseURL: "https://note-d8357-default-rtdb.firebaseio.com",
  projectId: "note-d8357",
  storageBucket: "note-d8357.appspot.com",
  messagingSenderId: "1130606017",
  appId: "1:1130606017:web:e79c66e6bcae8889db9340",
  measurementId: "G-P2CMB293C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
export default analytics