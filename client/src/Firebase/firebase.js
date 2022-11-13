import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCTCpd128IkuaTmLBBdGtzJLWDYZ-Fv7Iw",
    authDomain: "treasury-trip.firebaseapp.com",
    projectId: "treasury-trip",
    storageBucket: "treasury-trip.appspot.com",
    messagingSenderId: "706929343611",
    appId: "1:706929343611:web:f6831789e86ebadf2676de",
    measurementId: "G-FZ7DD47CD8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
export { app, auth };