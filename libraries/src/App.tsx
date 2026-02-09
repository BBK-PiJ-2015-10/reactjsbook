import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import {Book, InputBook} from './Book';

function App() {

    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        fetch('http://localhost:3001/books')
            .then((response) => response.json())
            .then((data) => setBooks(data))
    }, []);

    async function handleDelete(book: Book) {
        fetch(`http://localhost:3001/books/${book.id}`,
            {method: 'DELETE'}
        ).then(
            (response) => {
                if (response.ok) {
                    setBooks((prevBooks) =>
                        prevBooks.filter((prevBooks) => prevBooks.id !== book.id)
                    );
                }
            }
        );
    }

    async function handleSave(book: InputBook) {
        let url = 'http://localhost:3001/books'
        let method = 'POST'
        if (book.id) {
            url = url + `/${book.id}`;
            method = 'PUT'
        }
        console.log('Triggering a save')
        const request = await fetch(url, {
            method: method,
            body: JSON.stringify(book),
            headers: {'content-type': 'application/json'}
        })
        const savedBook = await request.json();
        if (book.id) {
            setBooks((prevBooks) => books.map((prevBook) => {
                    if (prevBook.id === book.id) {
                        return savedBook;
                    } else {
                        return prevBook;
                    }
                })
            );
        } else {
            setBooks((prevBooks) => [...prevBooks, savedBook]);
        }
    }

    return (
        <List books={books} onDelete={handleDelete} onSave={handleSave}/>
    );


}

export default App;
