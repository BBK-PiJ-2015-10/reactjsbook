import React from 'react';
import logo from './logo.svg';
import './App.css';
//import {Counter} from './features/counter/Counter';
import List from './features/books/List';
import Form from './features/books/Form';
import Login from "./features/login/Login";
import {selectToken} from "./features/login/loginSlice";
import {useSelector} from "react-redux";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

function App() {

    const token = useSelector(selectToken);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/edit/:id" element={token ? <Form/> : <Login/>}/>
                <Route path="/new" element={token ? <Form/> : <Login/>}/>
                <Route path="/list" element={token ? <List/> : <Login/>}/>
                <Route path="/" element={token ? <Navigate to="/list"/> : <Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
