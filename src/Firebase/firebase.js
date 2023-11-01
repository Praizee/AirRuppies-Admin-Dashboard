// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHZ6eGGCbUu2VOzhFA1reHruUmviBvV9s",
    authDomain: "airruppies-admin-dashboard.firebaseapp.com",
    projectId: "airruppies-admin-dashboard",
    storageBucket: "airruppies-admin-dashboard.appspot.com",
    messagingSenderId: "852800882532",
    appId: "1:852800882532:web:d6aa6d6e658e8629469c71",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://airruppies-admin-dashboard-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);