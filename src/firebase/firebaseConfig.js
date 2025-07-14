// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'; // Para o Realtime Database
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcN4AesOFTdDuMJkA-VDxZplZk3yi5Zng",
  authDomain: "colony-connect-2f8dd.firebaseapp.com",
  databaseURL: "https://colony-connect-2f8dd-default-rtdb.firebaseio.com",
  projectId: "colony-connect-2f8dd",
  storageBucket: "colony-connect-2f8dd.firebasestorage.app",
  messagingSenderId: "701804689458",
  appId: "1:701804689458:web:4cc70900d8674dc862642b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Pega a referência para o nosso banco de dados
export const db = getDatabase(app);