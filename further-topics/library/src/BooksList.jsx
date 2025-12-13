import {useEffect, useState} from 'react';
import './BooksList.css';

// const initialBooks = [
//     {
//         id: 1,
//         title: 'first book',
//         author: 'god',
//         isbn: '12343',
//         rating: 5
//     },
//     {
//         id: 2,
//         title: 'second book',
//         isbn: '4567',
//         rating: 4
//     },
//     {
//         id: 3,
//         title: 'third book',
//         author: 'godana',
//         isbn: '891011',
//         rating: 2
//     }
// ];

function BooksList() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setBooks([
                {
                    id: 1,
                    title: 'first book',
                    author: 'god',
                    isbn: '12343',
                    rating: 5
                }
            ]);
        },2000);
    },[]);


    if (books.length === 0) {
        return <div>No books found</div>;
    } else {
        return (
            <table>
                <thead>
                <tr>
                    <th>Id</th>
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
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default BooksList;