// https://firebase.google.com/docs/firestore/quotas
// https://firebase.google.com/docs/firestore/quickstart
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCLSqP9ZcOU1kIpTI9sc5nzTaS65ANcXbQ',
  authDomain: 'react-tryout-6d7dd.firebaseapp.com',
  projectId: 'react-tryout-6d7dd',
  storageBucket: 'react-tryout-6d7dd.appspot.com',
  messagingSenderId: '681504389287',
  appId: '1:681504389287:web:98fcbc3bb962b361f0c382',
  measurementId: 'G-T5DZTP8CG5',
};

const firebase_app = firebase.initializeApp(firebaseConfig);

export default firebase_app;
