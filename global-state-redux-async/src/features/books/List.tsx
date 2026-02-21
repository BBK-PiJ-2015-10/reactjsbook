import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
//import {selectBooks, selectBook, selectRatingFilter, remove} from "./booksSlice";
import {selectBooks, selectRemoveState, selectLoadingState, loadData, deleteData} from "./booksSlice";
import {useAppDispatch} from "../../app/Hooks";
import {useNavigate} from "react-router-dom";
import booksData from "./booksData";

const List: React.FC = () => {

    //const books = useSelector((state: RootState) => state.books).books;

    const books = useSelector(selectBooks);
    const loadingState = useSelector(selectLoadingState);
    const removeState = useSelector(selectRemoveState);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    //const selectBookWithId2 = useSelector(selectBook)(2)

    //const dog = useSelector(selectRatingFilter)

    useEffect(() => {
        dispatch(loadData())
    }, [dispatch]);

    if (loadingState === 'pending') {
        return <div>Loading...</div>
    } else if (loadingState === 'error') {
        return <div>An eerror has occurred</div>
    } else {
        return (<>
                {removeState === 'pending' && <div>Data record being deleted</div>}
                {removeState === 'error' && <div>An error occurred during deletion</div>}
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
                                <button onClick={() => dispatch(deleteData(book.id))}>
                                    Delete
                                </button>
                            </td>
                            <td>
                                <button onClick={() => navigate(`/edit/${book.id}`)}>
                                    edit
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button onClick={() => navigate(`/new`)}>
                    new
                </button>
            </>
        )
    }
}

export default List;