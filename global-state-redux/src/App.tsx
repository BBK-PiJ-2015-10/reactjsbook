import React from 'react';
import logo from './logo.svg';
import './App.css';
//import {Counter} from './features/counter/Counter';
import List from './features/books/List';
import Form from './features/books/Form';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/edit/:id" element={<Form/>}/>
                <Route path="/new" element={<Form/>}/>
                <Route path="/list" element={<List/>}/>
                <Route path="/" element={<Navigate to="/list"/>}/>
            </Routes>
        </BrowserRouter>
        //<List/>
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo"/>
        //         <p>
        //             Edit <code>src/App.tsx</code> and save to reload.
        //         </p>
        //         <a
        //             className="App-link"
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             Learn React
        //         </a>
        //     </header>
        // </div>
    );
}

export default App;
