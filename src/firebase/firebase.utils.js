import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDsVUS34o9aRERkm8bd3qX4YKvmFmgmbuc",
    authDomain: "react-project-8686f.firebaseapp.com",
    projectId: "react-project-8686f",
    storageBucket: "react-project-8686f.appspot.com",
    messagingSenderId: "632928817228",
    appId: "1:632928817228:web:b23f1a05bd16c3dcc264e9"
};


export const createUserProfileDocument = async(userAuth, otherData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        var { displayName, email, } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            })
        } catch (error) {
            console.log('error while creating acc', error);
        }
    }
    return userRef;
}


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;