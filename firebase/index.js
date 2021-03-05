import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Need to update below config
const config = {
    apiKey: "AIzaSyDQDPsbDv5uCMe5Dj-sl_iakmtoRkfKNS0",
    authDomain: "salvadors-hotel.firebaseapp.com",
    projectId: "salvadors-hotel",
    storageBucket: "salvadors-hotel.appspot.com",
    messagingSenderId: "204879550163",
    appId: "1:204879550163:web:68855cb5f9323e88f8a626",
    measurementId: "G-5G3WYX3424"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
export {
    auth,
    firebase
};