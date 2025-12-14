import {useEffect, useState} from 'react';
import './BooksList.css';

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
        }, 2000);
    }, []);

    useEffect(() => {
        console.log('Elements in the state ', books.length);
        console.log('Table rows: ', document.querySelectorAll('tbody tr').length);
    });


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