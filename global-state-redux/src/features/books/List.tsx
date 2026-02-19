import React from 'react';
import {useSelector} from "react-redux";
//import {selectBooks, selectBook, selectRatingFilter, remove} from "./booksSlice";
import {selectBooks, remove} from "./booksSlice";
import {useAppDispatch} from "../../app/Hooks";

const List: React.FC = () => {

    //const books = useSelector((state: RootState) => state.books).books;

    const books = useSelector(selectBooks)

    //const selectBookWithId2 = useSelector(selectBook)(2)

    //const dog = useSelector(selectRatingFilter)

    const dispatch = useAppDispatch();

    return (
        <table>
            <thead>
            <tr>
                <td>Title</td>
                <td>Author</td>
                <td>ISBN</td>
            </tr>
            </thead>
            <tbody>
            {books.map((book) => (
                <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.isbn}</td>
                    <td>
                        <button onClick={() => dispatch(remove(book.id))}>
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default List;