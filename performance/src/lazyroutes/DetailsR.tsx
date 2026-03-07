import React from 'react';
import {Book} from '../lazy/Book';
import {useParams} from 'react-router-dom';

type Props = {
    books: Book[]
}

const DetailsR: React.FC<Props> = ({books}) => {

    const id = parseInt(useParams<{ id: string }>().id!, 10);
    const book = books.find((b) => b.id === id);

    if (!book) {
        return (
            <div>No data found</div>
        )
    };

    return (
        <table>
            <tbody>
            <tr>
                <th>Title:</th>
                <td>{book.title}</td>
            </tr>
            <tr>
                <th>Author:</th>
                <td>{book.author}</td>
            </tr>
            <tr>
                <th>ISBN:</th>
                <td>{book.isbn}</td>
            </tr>
            <tr>
                <td>Rating:</td>
                <td>{book.rating}</td>
            </tr>
            </tbody>
        </table>
    )
};

export default DetailsR;
