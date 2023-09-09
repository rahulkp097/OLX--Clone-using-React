import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ-rmjQYHSzgAeFaNdFqmKPx4JL7CrENo",
  authDomain: "olx-clone-c65c6.firebaseapp.com",
  databaseURL: "https://olx-clone-c65c6-default-rtdb.firebaseio.com",
  projectId: "olx-clone-c65c6",
  storageBucket: "olx-clone-c65c6.appspot.com",
  messagingSenderId: "928899254305",
  appId: "1:928899254305:web:f525983201662229b8fb60",
  measurementId: "G-PREZ189XQS"
};

export default firebase.initializeApp(firebaseConfig)