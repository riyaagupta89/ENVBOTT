import React from 'react';
import './index.css';
import App from './App';
import Login from './Login';
import NoPage from './NoPage';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
        <Route path="/welcome" element={<App />} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


{/* <Link to="/contact"><button>click me bhai</button></Link> */}
reportWebVitals();
