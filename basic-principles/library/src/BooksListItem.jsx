function BooksListItem({book}) {
    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.author ? book.author : 'Unknown'}</td>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.rating && <span>{'*'.repeat(book.rating)}</span>}</td>
        </tr>
    );
}

export default BooksListItem;
