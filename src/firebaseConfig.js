
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

 const config = {
    apiKey: "AIzaSyD_4JF1ZAf29gSq6wc3iKa7xBkg0PFOhkw",
    authDomain: "eli-app3.firebaseapp.com",
    databaseURL: "https://eli-app3.firebaseio.com",
    projectId: "eli-app3",
    storageBucket: "",
    messagingSenderId: "324828100842"
};


firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export const ref = firebase.database().ref()
export const auth = firebase.auth()
export const database = firebase.database()
export const fire = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider()

export default firebase;