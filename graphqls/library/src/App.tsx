import React, {cache} from 'react';
import './App.css';
import List from "./List";
import client from './apolloClient';
import {ApolloProvider} from "@apollo/client/react";
import Login from "./Login";

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Login/>
            <List/>
        </ApolloProvider>
    )
};

export default App;
