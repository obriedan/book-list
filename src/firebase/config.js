import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBxaWlS9ZBSeDwYk0_x5nPUru1R2ymJs4I',
  authDomain: 'reading-list-app-f7bef.firebaseapp.com',
  projectId: 'reading-list-app-f7bef',
  storageBucket: 'reading-list-app-f7bef.appspot.com',
  messagingSenderId: '208828226299',
  appId: '1:208828226299:web:e8bc21cd938e92db432e5e',
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };
