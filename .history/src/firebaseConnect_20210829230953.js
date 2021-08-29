
import firebase from 'firebase/app'
import 'firebase/auth'

const fbConfig = {}



firebase.initializeApp(fbConfig)
firebase.firestore();

export default firebase;
