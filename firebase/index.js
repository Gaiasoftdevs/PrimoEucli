import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Need to update below config
const config = {
   apiKey: "AIzaSyBLvUV6_LzCgzwC8mMdL9qd73w5L72qiJI",
    authDomain: "fidelio-3cd32.firebaseapp.com",
    projectId: "fidelio-3cd32",
    storageBucket: "fidelio-3cd32.appspot.com",
    messagingSenderId: "1094375557869",
    appId: "1:1094375557869:web:e5c767a53f004926145ae4",
    measurementId: "G-TEEVRM7R90"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
export {
    auth,
    firebase
};
