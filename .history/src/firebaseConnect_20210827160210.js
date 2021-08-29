// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
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

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// console.log()
// export default analytics;


// Initialize Firebase with a "default" Firebase project
const defaultProject = initializeApp(firebaseConfig);

console.log(defaultProject);  // "[DEFAULT]"

// Option 1: Access Firebase services via the defaultProject variable
let defaultStorage = getStorage(defaultProject);
let defaultFirestore = getFirestore(defaultProject);
console.log(defaultStorage)
console.log(defaultFirestore)
// Option 2: Access Firebase services using shorthand notation
defaultStorage = getStorage();
defaultFirestore = getFirestore();
console.log(defaultStorage)
console.log(defaultFirestore.databaseId)
