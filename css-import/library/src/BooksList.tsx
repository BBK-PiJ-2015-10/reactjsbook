import React from "react";
import Book from "./Book";
import './BooksList.css';

const books: Book[] = [
    {
        "id": 1,
        "title": "Java",
        "author": "alex",
        "isbn": "12231",
        "rating": 5
    },
    {
        "id": 2,
        "title": "Scala",
        "author": "alex",
        "isbn": "4567",
        "rating": 4
    },
    {
        "id": 3,
        "title": "Node Js",
        "author": "alex",
        "isbn": "891011",
        "rating": 3
    }
];

const BooksList: React.FC = () => {
    return (
        <table className="BooksList">
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
                <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.isbn}</td>
                    <td>{book.rating && <span>
                        {'*'.repeat(book.rating)}
                    </span>}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default BooksList;