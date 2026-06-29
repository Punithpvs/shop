const FIREBASE_CONFIG = {
  apiKey: "AIzaSyD_L74VfB7kK2dBuye41kXVKrdyf48onnk",
  authDomain: "shopping-a76e7.firebaseapp.com",
  databaseURL: "https://shopping-a76e7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shopping-a76e7",
  storageBucket: "shopping-a76e7.firebasestorage.app",
  messagingSenderId: "237686960303",
  appId: "1:237686960303:web:f433816cb8c67bcdf3a45a"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}
const database = firebase.database();
const auth = firebase.auth();