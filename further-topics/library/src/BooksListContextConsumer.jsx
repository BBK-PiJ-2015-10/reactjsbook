import './BooksList.css';

import {useEffect, useContext} from "react";
import BooksContext from "./BooksContext";
import BooksListItemContextConsumer from "./BooksListItemContextConsumer";
import axios from "axios";

function BooksListContextConsumer() {
    const [books, setBooks] = useContext(BooksContext);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_API_SERVER}/books`);
            setBooks(data);
        })();
    }, []);
    return (
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Rating</th>
            </tr>
            </thead>
            <tbody>
            {books.map((book) => (
                <BooksListItemContextConsumer key={book.id} book={book}/>
            ))}
            </tbody>
        </table>
    );
}

export default BooksListContextConsumer;