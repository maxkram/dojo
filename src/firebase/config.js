import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyDFqHDhYiEo40LI2YcBsxbDiX0fNyWCVMU',
    authDomain: 'dojo-27bb5.firebaseapp.com',
    projectId: 'dojo-27bb5',
    storageBucket: 'dojo-27bb5.appspot.com',
    messagingSenderId: '813247125233',
    appId: '1:813247125233:web:6c006f5085a2eec539bb50',
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
