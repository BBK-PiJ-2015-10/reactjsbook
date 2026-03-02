import {useState} from "react";

// const books =
// [
//     {
//         id: '1',
//         title: 'JavaScript - The Comprehensive Guide',
//         isbn: '978-38'
//     },
//     {
//         id: '2',
//         title: 'Clean Code',
//         isbn: '978-013'
//     },
//     {
//         id: '3',
//         title: 'Design Patterns',
//         isbn: '978-020163'
//     }
// ];

function List() {
    let initialValue = [];
    try {
        initialValue = window._data_;
    } catch (e) {
        console.log(`Something failed due to ${e}`);
    }

    if (global._data_) {
        console.log('Setting up initial value with global data');
        initialValue = global._data_;
    }

    const [books, setBooks] = useState(initialValue);

    // This is calling the SSR service
    async function handleDelete(id) {
        console.log('Frontend sending delete request to backend');
        const response = await fetch(`http://localhost:3000/books/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            console.log('Backend sent response');
            setBooks((prevBooks) => prevBooks.filter((book) => book.id != id));
        }
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>ISBN</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.isbn}</td>
                        <td>
                            <button onClick={() => handleDelete(book.id)}>
                                delete
                            </button>
                        </td>
                    </tr>
                )
            )}
            </tbody>
        </table>
    )
}

export default List;