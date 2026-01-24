import React from "react";
import Book from "./Book";
import './BooksList.scss';
import classnames from 'classnames';

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
        "rating": 5
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
            {books.map((book) => {
                const classes = classnames({Highlight: book.rating === 5});
                return (
                    <tr key={book.id} className={classes}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.isbn}</td>
                        <td>{book.rating && <span>
                        {'*'.repeat(book.rating)}
                    </span>}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}

export default BooksList;