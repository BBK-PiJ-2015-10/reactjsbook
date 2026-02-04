import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import {Book} from './Book';

function App() {

    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        fetch('http://localhost:3001/books')
            .then((response) => response.json())
            .then((data) => setBooks(data))
    }, []);

    return (
        <List books={books}/>
    );
}

export default App;
