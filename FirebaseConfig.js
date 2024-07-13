import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAMr31QmsyDig9QpBp7hE_w_456VzHxLuo",
    authDomain: 'brent-5889f.firebaseapp.com',
    databaseURL: 'https://brent-5889f.firebaseio.com',
    projectId: "brent-5889f",
    storageBucket: 'brent-5889f.appspot.com',
    messagingSenderId: '614515698592',
    appId: "1:614515698592:android:622a6949c33a38fc9312c5",
    measurementId: 'G-measurement-id',
};

export const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app)

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
