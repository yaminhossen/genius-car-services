// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSMpdzvuj0wtkbX1SmD8sFbwwQT_vAE3w",
    authDomain: "genius-car-services-8ec54.firebaseapp.com",
    projectId: "genius-car-services-8ec54",
    storageBucket: "genius-car-services-8ec54.appspot.com",
    messagingSenderId: "805446661877",
    appId: "1:805446661877:web:cf5f458fbf63f5b4d077bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;