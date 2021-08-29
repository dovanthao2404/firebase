
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
const fbConfig = {}



firebase.initializeApp(fbConfig)
firebase.firestore();

export default firebase;
