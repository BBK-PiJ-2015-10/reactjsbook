import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Book, InputBook} from "./Book";

type Props = {
    onSave: (book: InputBook) => void;
    book?: Book;
};

const defaultValues: InputBook = {
    title: '',
    author: '',
    isbn: ''
}

const schema = yup
    .object({
        title: yup
            .string()
            .min(4, 'The title must be at least 4 characters longs.')
            .max(25, 'The title can not have more than 25 characters')
            .required('The title is a required field.'),
        author: yup.string().required('The author is a required field'),
        isbn: yup.string().required('The ISBN is a required field')
    })
    .required();

const FormWithSchemaValidation: React.FC<Props> = ({onSave, book: inputBook}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<InputBook>({
        defaultValues,
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        reset(inputBook);
    }, [inputBook, reset]);

    return (
        <form className="Form" onSubmit={handleSubmit(onSave)}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" data-testid="title"
                       {...register('title')}
                       className={errors.title && 'error'}
                />
                {errors.title && <div className="error" data-testid="titleError">
                    {errors.title.message}
                </div>}
            </div>
            <div>
                <label htmlFor="author">Author:</label>
                <input type="text" data-testid="author"
                       {...register('author')} className={errors.author && 'error'}
                />
                {errors.author && <div className='error' data-testid="authorError">
                    {errors.author.message}
                </div>}
            </div>
            <div>
                <label htmlFor="isbn">Isbn:</label>
                <input type="text" data-testid="isbn"
                       {...register('isbn')} className={errors.isbn && 'error'}/>
                {errors.isbn && <div className='error' data-testid="isbnError">{errors.isbn.message}</div>}
            </div>
            <div>
                <button type="submit" data-testid="submit">save</button>
            </div>
        </form>
    );
};

export default FormWithSchemaValidation;