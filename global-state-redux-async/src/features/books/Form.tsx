import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {save, selectBook} from "./booksSlice";
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch} from "../../app/Hooks";
import {InputBook} from "./books";

const Form: React.FC = () => {

    const getBook = useSelector(selectBook);

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
        <form onSubmit={handleSubmit((data) => {
            dispatch(save(data));
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
    )
};

export default Form;
