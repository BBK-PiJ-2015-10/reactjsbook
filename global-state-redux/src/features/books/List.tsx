import React from 'react';
import {useSelector} from "react-redux";
//import {RootState} from "../../app/store";
import {selectBooks} from "./booksSlice";

const List: React.FC = () => {

    //const books = useSelector((state: RootState) => state.books).books;

    const books = useSelector(selectBooks)

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
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default List;