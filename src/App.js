import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzwkkiOwocBUcCB0qLRndDl0uiinemmVo",
  authDomain: "e-invoice-8f643.firebaseapp.com",
  projectId: "e-invoice-8f643",
  storageBucket: "e-invoice-8f643.appspot.com",
  messagingSenderId: "250805227685",
  appId: "1:250805227685:web:7ee2e57d108b507804bd4c",
  measurementId: "G-NYYFV697Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
