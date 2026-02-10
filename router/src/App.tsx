import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import List from './List';
import Form from './Form';
import Nav from './Nav'

import './App.css';
import {Container} from "@mui/material";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Container sx={{ marginTop: '80px'}}>
                <Routes>
                    <Route path="/list" element={<List/>}/>
                    <Route path="/form" element={<Form/>}/>
                    <Route path="/" element={<Navigate to="/list"/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
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
