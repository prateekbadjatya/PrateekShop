import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAYokowbNl8Kolw4MIjkntn0JxwiCYn6Hw',
  authDomain: 'my-db-48f5f.firebaseapp.com',
  databaseURL: 'https://my-db-48f5f.firebaseio.com',
  projectId: 'my-db-48f5f',
  storageBucket: 'my-db-48f5f.appspot.com',
  messagingSenderId: '1057319014645',
  appId: '1:1057319014645:web:da50f0907f2bacfb5a35bc',
  measurementId: 'G-EDFP4CQ63E'
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
