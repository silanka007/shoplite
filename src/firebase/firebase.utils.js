import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDiYMXdrl6J1Nk-Qcc9pFyG55hlQ4iZdHs",
    authDomain: "monthly-clearance-app.firebaseapp.com",
    databaseURL: "https://monthly-clearance-app.firebaseio.com",
    projectId: "monthly-clearance-app",
    storageBucket: "monthly-clearance-app.appspot.com",
    messagingSenderId: "710013801931",
    appId: "1:710013801931:web:311623771af7cd6b4f524e"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters = ({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;