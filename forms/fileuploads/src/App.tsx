import logo from './logo.svg';
import './App.css';

import axios from "axios";
import {useEffect, useState} from "react";
import React from "react";
import {Book} from "./Book";
import Form from './Form';

const App: React.FC = () => {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const {data} = await axios.get<Book[]>('http://localhost:3001/books');
        setBooks(data);
    }

    async function handleSubmit(formdata: FormData) {
        await axios.post('http://localhost:3001/books', formdata, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        });
        fetchData();
    }

    return (
        <div>
            <Form onSave={handleSubmit}/>
            <hr/>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.title}
                        {book.image && (<img src={book.image} height="40"
                                             width="40" alt={book.title}/>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
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
