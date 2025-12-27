import React, {useState, useEffect} from "react";
import Book from "./Book";
import BookListItem from "./BookListItem";
import axios from 'axios';

const BooksList: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        axios.get<Book[]>('http://localhost:3001/books')
            .then((response) => setBooks(response.data));
    }, []);

    return (
        <ul>
            {books.map((book) => (
                <BookListItem key={book.id} book={book}/>
            ))}
        </ul>
    );
}

export default BooksList;