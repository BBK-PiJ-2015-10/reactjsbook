import React from 'react';


const books = new Array(1000000)
    .fill({
        title: "Design Patterns",
        author: 'Eric Gamma',
        isbn: '123',
        rating: 5
    })
    .map((book, id) => ({...book, id}));

const NonVirtualTablesApp: React.FC = () => {
    return (
        <table>
            <thead>
            <tr>
                <th>id</th>
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
                    <td>{book.rating && <span>{'*'.repeat(book.rating)}</span>}</td>
                </tr>
            ))};
            </tbody>
        </table>
    )
};

export default NonVirtualTablesApp;
