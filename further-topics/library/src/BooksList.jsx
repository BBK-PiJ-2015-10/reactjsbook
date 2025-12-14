import {useEffect, useState} from 'react';
import './BooksList.css';

function BooksList() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://localhost:3001/books');
                if (!response.ok) {
                    throw new Error (`Request to fetch books failed with ${response.statusMessage}`);
                }
                const data = await response.json();
                setBooks(data);
            } catch (error){
                setError(error);
            }
        })();
    }, []);

    // useEffect(() => {
    //     fetch('http://localhost:3001/books')
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`Request to fetch books failed with ${response.statusMessage}`);
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setBooks(data);
    //         })
    //         .catch((error) => setError(error));
    // },[]);

    if (error !== null) {
        return <div>An error has occurred ${error.message}</div>;
    } else if (books.length === 0) {
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
                        <td>{book.id}</td>
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