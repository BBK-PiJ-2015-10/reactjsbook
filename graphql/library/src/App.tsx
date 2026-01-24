import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {ApolloProvider} from "@apollo/client/react";
import List from "./List";

const client = new ApolloClient(
    {
        link: new HttpLink({
            uri: 'http://localhost:3001/api'
        }),
        cache: new InMemoryCache()
    }
);

const App: React.FC = () => {
    return(
        <ApolloProvider client={client} >
            <List  />
        </ApolloProvider>
    )
}

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo"/>
//                 <p>
//                     Edit <code>src/App.tsx</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

export default App;
