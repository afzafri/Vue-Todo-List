import * as firebase from 'firebase';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyC_Fre6S-p0ou4joW94n9WzGhC68MK3sSw",
  authDomain: "todolist-f9c2b.firebaseapp.com",
  databaseURL: "https://todolist-f9c2b.firebaseio.com",
  projectId: "todolist-f9c2b",
  storageBucket: "todolist-f9c2b.appspot.com",
  messagingSenderId: "603454711668",
  appId: "1:603454711668:web:c559a901cef96347902e21",
  measurementId: "G-LEB4M7XVK3"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase;
