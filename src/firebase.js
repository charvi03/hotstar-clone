import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC_PPzA9B-di9TJ1TDqOWoOKT6L7GqWNVo",
  authDomain: "disneyplus-clone-9e133.firebaseapp.com",
  projectId: "disneyplus-clone-9e133",
  storageBucket: "disneyplus-clone-9e133.appspot.com",
  messagingSenderId: "527267385147",
  appId: "1:527267385147:web:8f92f75bc1a2e74e53b11e",
  measurementId: "G-V2B4B1M6YE",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
