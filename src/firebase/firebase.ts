import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyC8Iz7G61-mWevUOUK1hSnsAoJTfLetbSw',
  authDomain: 'personal-web-26017.firebaseapp.com',
  projectId: 'personal-web-26017',
  storageBucket: 'personal-web-26017.appspot.com',
  messagingSenderId: '1044326542003',
  appId: '1:1044326542003:web:30b4c812b1157ab24f5ec6',
  measurementId: 'G-12MYHDPL2G',
};

export const firebase = initializeApp(FIREBASE_CONFIG);
export const firestore = getFirestore(firebase);
