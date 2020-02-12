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

export const createUserProfileDocument = async ( userAuth, otherParams) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    
    if(!snapshot.exists){
        const {displayName, email } = userAuth;
        const createdAt = new Date();
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...otherParams
        })
            .catch(error => console.log('there was an error creating user', error));
    }
    return userRef;
}

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters = ({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
