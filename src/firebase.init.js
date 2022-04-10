import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAz3tNvXL8-qmn3Kj7hCsHWJ2ec_CigjlU",
  authDomain: "genius---car-service.firebaseapp.com",
  projectId: "genius---car-service",
  storageBucket: "genius---car-service.appspot.com",
  messagingSenderId: "335129467368",
  appId: "1:335129467368:web:9a624aae795cb1dd87ac5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth