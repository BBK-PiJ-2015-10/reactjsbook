import PropTypes from "prop-types";

function BooksListItem({book}) {
    return (
        <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author ? book.author : 'Unknown'}</td>
            <td>{book.isbn}</td>
            <td>{book.rating && <span>{'*'.repeat(book.rating)}</span>}</td>
        </tr>
    );
}

// BooksListItem.propTypes = {
//  book: PropTypes.object.isRequired
// };

BooksListItem.propTypes = {
    book: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired  ,
            author: PropTypes.string,
            isbn: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        }
    ).isRequired
};


export default BooksListItem;
