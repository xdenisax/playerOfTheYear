import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAiEaqAENsux7_3K2PjtdQZ9hkS8OBjh9c",
  authDomain: "playeroftheyear-80c15.firebaseapp.com",
  databaseURL: "https://playeroftheyear-80c15.firebaseio.com",
  projectId: "playeroftheyear-80c15",
  storageBucket: "playeroftheyear-80c15.appspot.com",
  messagingSenderId: "711324625251",
  appId: "1:711324625251:web:319a2d71a16a6b30c20b56"

};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
