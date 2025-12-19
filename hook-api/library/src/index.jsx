import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import AppUsingRef from "./AppUsingRef";
import reportWebVitals from './reportWebVitals';
//import AppUsingRefHook from "./AppUsingRefHook";
//import AppUsingForwardRef from "./AppUsingForwardRef";
import AppUsingImperative from "./AppUsingImperative";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppUsingImperative/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
