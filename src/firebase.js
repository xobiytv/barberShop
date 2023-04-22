import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgRE3CpFgxufKXN-1Qnx0ThrML9-LNIqg",
  authDomain: "general-salon.firebaseapp.com",
  projectId: "general-salon",
  storageBucket: "general-salon.appspot.com",
  messagingSenderId: "875128624511",
  appId: "1:875128624511:web:856cb9ffa65e631088764a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
