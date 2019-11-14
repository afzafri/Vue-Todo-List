import * as firebase from 'firebase';

// Your web app's Firebase configuration
const config = {
  apiKey: "xxxxx",
  authDomain: "xxxxx",
  databaseURL: "xxxxx",
  projectId: "xxxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxxx",
  appId: "xxxxx",
  measurementId: "xxxxx"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase;
