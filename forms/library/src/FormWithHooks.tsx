import React from 'react';
import {InputBook, Book} from "./Book";
import useForm from "./useForm";

type Props = {
    onSave: (book: InputBook) => void,
    book?: Book
}

const FormWithHooks: React.FC<Props> = ({onSave, book: inputBook}) => {

    const {book, handleSubmit, handleChange} = useForm(onSave, inputBook);

    return (
        <form className="Form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={book.title} onChange={handleChange}
                       data-testid="title"/>
            </div>
            <div>
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" name="author" value={book.author} onChange={handleChange}
                       data-testid="author"/>
            </div>
            <div>
                <label htmlFor="isbn">ISBN:</label>
                <input type="text" id="isbn" name="isbn" value={book.isbn} onChange={handleChange}
                       data-testid="isbn"/>
            </div>
            <div>
                <button type="submit" data-testid="submit">
                    save
                </button>
            </div>
        </form>
    )

};

export default FormWithHooks;
