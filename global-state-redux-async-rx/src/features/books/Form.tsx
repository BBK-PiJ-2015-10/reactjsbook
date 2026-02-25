import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectSaveState, selectBook} from "./booksSlice";
import {saveAction} from "./books.actions";
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch} from "../../app/Hooks";
import {InputBook} from "./books";

const Form: React.FC = () => {

    const getBook = useSelector(selectBook);
    const savingState = useSelector(selectSaveState);

    const dispatch = useAppDispatch();

    const navigate = useNavigate();


    const {register, handleSubmit, reset} = useForm<InputBook>({
        defaultValues: {title: '', author: '', isbn: ''}
    });

    const {id} = useParams<{ id?: string }>();

    useEffect(() => {
        if (id) {
            const book = getBook(parseInt(id, 10));
            reset(book);
        }
    }, [id, reset, getBook]);

    return (
        <>
            {savingState === 'pending' && <div>Data is being saved</div>}
            {savingState === 'error' && <div>Data could not be saved</div>}
            <form onSubmit={handleSubmit((data) => {
                dispatch(saveAction.request(data));
                navigate('/list');
            })}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" {...register('title')}/>
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input type="text" {...register('author')}/>
                </div>
                <div>
                    <label htmlFor="isbn">ISBN:</label>
                    <input type="text" {...register('isbn')}/>
                </div>
                <div>
                    <button type="submit">save</button>
                </div>
            </form>
        </>
    )
};

export default Form;
