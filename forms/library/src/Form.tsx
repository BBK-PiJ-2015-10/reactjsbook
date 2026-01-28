import React, {ChangeEvent, FormEvent, ReactElement, useEffect, useState} from 'react';
import {InputBook, Book} from "./Book";

type Props = {
    onSave: (book: InputBook) => void;
    book?: Book;
}

const initialBook: InputBook = {
    title: '',
    author: '',
    isbn: ''
}

const Form: React.FC<Props> = ({onSave, book: inputBook}) => {
    const [book, setBook] = useState<InputBook>(initialBook);

    useEffect(() => {
        if (inputBook) {
            console.log(`Setting book to inputBook ${inputBook}`)
            setBook(inputBook);
        }
    }, [inputBook]);

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setBook((prevBook) => {
            return {
                ...prevBook, [event.target.name]: event.target.value
            }
        });
    }

    function handleSubmit(event: ChangeEvent<HTMLFormElement>): void {
        event.preventDefault();
        onSave(book);
    }

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
                       data-test-id="isbn"/>
            </div>
            <div>
                <button type="submit" data-test-id="submit">
                    save
                </button>
            </div>
        </form>
    )
};

export default Form;



