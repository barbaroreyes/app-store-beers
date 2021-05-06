 import firebase from 'firebase/app'
 import 'firebase/firestore'
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyApi1HlrONuiT7UeR7kBFhtdHN8mnzbSOQ",
  authDomain: "store-29162.firebaseapp.com",
  projectId: "store-29162",
  storageBucket: "store-29162.appspot.com",
  messagingSenderId: "392437932954",
  appId: "1:392437932954:web:596adff25c40f27e0b1023"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()