import React, {useState} from 'react';
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import List from './List';
import Form from './Form';
import Nav from './Nav'
import NotFound from "./NotFound";
import Login from './Login';

import './App.css';
import {Container} from "@mui/material";


const App: React.FC = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(false);

    function handleLogin(username: string, password: string): void {
        if (username === 'admin' && password === 'test') {
            setLoggedIn(true);
            navigate('/');
        }
    }

    return (
        <>
            <Container sx={{marginTop: '80px'}}>
                <Nav/>
                <Routes>
                    <Route path="/list" element={isLoggedIn ? <List/> : <Navigate to="/login"/>}/>
                    <Route path="/form" element={isLoggedIn ? <Form/> : <Navigate to="/login"/>}/>
                    <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
                    <Route path="/" element={<Navigate to="/list"/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Container>
        </>
    )
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
