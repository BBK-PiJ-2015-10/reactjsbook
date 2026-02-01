import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {InputBook, Book} from "./Book";

type Props = {
    onSave: (book: InputBook) => void;
    book?: Book;
};

const defaultValues: InputBook = {
    title: '',
    author: '',
    isbn: ''
}

const Form: React.FC<Props> = ({onSave, book: inputbook}) => {

    const {register, handleSubmit, reset} = useForm<InputBook>({defaultValues});

    useEffect(() => {
        reset(inputbook);
    }, [inputbook, reset]);

    return (
        <form className="Form" onSubmit={handleSubmit(onSave)}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" data-testid='title' {...register('title')} />
            </div>
            <div>
                <label>Author:</label>
                <input type="text" data-testid='author' {...register('author')} />
            </div>
            <div>
                <label>Isbn:</label>
                <input type="text" data-testid="isbn" {...register('isbn')} />
            </div>
            <div>
                <button type="submit" data-testid="submit">Save</button>
            </div>
        </form>
    )
};

export default Form;