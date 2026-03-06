import React from 'react';
import {Book} from "./Book";

type Props = {
    book: Book
}

const Details: React.FC<Props> = ({book}) => {
    return (
        <table>
            <tbody>
            <tr>
                <th>Title:</th>
                <td>{book.title}</td>
            </tr>
            <tr>
                <th>Author</th>
                <td>{book.author}</td>
            </tr>
            <tr>
                <th>ISBN:</th>
                <td>{book.isbn}</td>
            </tr>
            <tr>
                <th>Rating:</th>
                <td>{book.rating}</td>
            </tr>
            </tbody>
        </table>
    )
};

export default Details;