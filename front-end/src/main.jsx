import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdEwbOSQnT2PCwn_6RoRxIODWpA82OGO4",
  authDomain: "react-full-stack-2109.firebaseapp.com",
  projectId: "react-full-stack-2109",
  storageBucket: "react-full-stack-2109.firebasestorage.app",
  messagingSenderId: "118889717721",
  appId: "1:118889717721:web:8f6312aced6805cfa443c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
