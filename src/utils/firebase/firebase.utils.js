import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBK9UKxJbhJx3-m-nX2SIxKYPwMhLKRdE4",
  authDomain: "crwn-clothing-db-783b5.firebaseapp.com",
  projectId: "crwn-clothing-db-783b5",
  storageBucket: "crwn-clothing-db-783b5.appspot.com",
  messagingSenderId: "731731928456",
  appId: "1:731731928456:web:140057f86d3b0be948063d"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

     const userSnapshot = await  getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const creatAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                creatAt
            });
        } catch (error)
        { console('error creating the user', error.message) }
    }
    return userDocRef;


}
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);

}