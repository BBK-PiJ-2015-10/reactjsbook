import './BooksList.css';

function BooksList({error, books}) {
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