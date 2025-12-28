import React, {useEffect, useContext} from "react";
import Book from './Book';
import BookListItem from "./BookListItem";
import axios from "axios";
import BooksContext from "./BooksContext";

const BooksListWithContext: React.FC = () => {
    const [books, setBooks] = useContext(BooksContext);

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
    )

}

export default BooksListWithContext;