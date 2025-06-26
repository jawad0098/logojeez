import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAQhvOSIZKJTQ0PqLBFFQyq2aCtJpUKYXU",
  authDomain: "yum-fe55f.firebaseapp.com",
  projectId: "yum-fe55f",
  storageBucket: "yum-fe55f.appspot.com",
  messagingSenderId: "321039742110",
  appId: "1:321039742110:web:be85e35e0690c233a8778f",
  measurementId: "G-SEW30WY66W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;