import * as firebase from 'firebase';

// Your web app's Firebase configuration
const config = {
  apiKey: "XXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXX",
  databaseURL: "XXXXXXXXXXXXXXXX",
  projectId: "XXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXX",
  measurementId: "XXXXXXXXXXXXXXXX"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase;
