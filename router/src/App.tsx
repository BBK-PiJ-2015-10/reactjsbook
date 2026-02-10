import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import List from './List';
import Form from './Form';
import Nav from './Nav'
import NotFound from "./NotFound";

import './App.css';
import {Container} from "@mui/material";


const App: React.FC = () => {
    return (
        <>
            <div>CULONZON</div>
            <Container sx={{marginTop: '80px'}}>
                <Nav/>
                <Routes>
                    <Route path="/list" element={<List/>}/>
                    <Route path="/form" element={<Form/>}/>
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
