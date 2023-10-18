// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq_P_s0PH0QlKtPLoVuAzkgum49T49r1w",
  authDomain: "react-feb19.firebaseapp.com",
  projectId: "react-feb19",
  storageBucket: "react-feb19.appspot.com",
  messagingSenderId: "1043817630914",
  appId: "1:1043817630914:web:b918b04de595683dea3f5b",
  measurementId: "G-5BJZ6V6XCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;