import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import AppCounter from "./callbackhook/AppCounter";
import reportWebVitals from './reportWebVitals';
import AppBooksLazy from "./lazy/AppBooksLazy";
//import AppBook from "./pure/AppBook";
//import AppWithoutMemo from "./memo/AppWithoutMemo";
//import AppWithMemo from "./memo/AppWithMemo";
//import AppWithMemoObject from "./memo/AppWithMemoObject";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AppBooksLazy/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
