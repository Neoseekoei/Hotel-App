import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCf7as1aRvj4RRUhjrttyhNirGddrCnutY",
  authDomain: "neo-hotel.firebaseapp.com",
  projectId: "neo-hotel",
  storageBucket: "neo-hotel.appspot.com",
  messagingSenderId: "1021815809639",
  appId: "1:1021815809639:web:70d2ebb91874705899d6c2",
  measurementId: "G-KRW3G9DXG9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth , db};