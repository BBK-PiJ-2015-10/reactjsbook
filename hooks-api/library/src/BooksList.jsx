import {useReducer} from 'react';
import './BooksList.css';
import produce from 'immer';
import {StarBorder, Star} from '@mui/icons-material';
///import './BooksListItem';
//import BooksListItem from "./BooksListItem";

function reducer(state, action) {
    switch (action.type) {
        case 'RATE':
            return produce(state, (draftState => {
                const index = draftState.findIndex(
                    (book) => book.id === action.payload.id
                );
                draftState[index].rating = action.payload.rating;
            }));
        default:
            return state;
    }
}

const initialBooks = [
    {
        id: 1,
        title: 'first book',
        author: 'god',
        isbn: '12343',
        rating: 3
    }
];

function BooksList() {

    const [books, dispatch] = useReducer(reducer, initialBooks);

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
                    <td>
                        {new Array(5).fill('').map((item, i) => (
                                <button
                                    className="ratingButton"
                                    key={i}
                                    onClick={() => dispatch({
                                        type: 'RATE',
                                        payload: {id: book.id, rating: i + 1}
                                    })
                                    }
                                >
                                    {book.rating < i + 1 ? <StarBorder/> : <Star/>}
                                </button>
                            )
                        )}

                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );

}

export default BooksList;