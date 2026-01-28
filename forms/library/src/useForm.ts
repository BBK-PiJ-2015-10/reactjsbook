import {useState, useEffect, ChangeEvent, FormEvent} from "react";
import {Book, InputBook} from "./Book";

const initialBook: InputBook = {
    title: '',
    author: '',
    isbn: ''
}

function useForm(
    onSave: (Book: InputBook) => void,
    inputBook?: InputBook
): {
    book: InputBook;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (Event: FormEvent<HTMLFormElement>) => void
} {
    const [book, setBook] = useState<InputBook>(initialBook);

    useEffect(() => {
        if (inputBook) {
            setBook(inputBook);
        }
    }, [inputBook]);

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setBook((prevBook) => {
            return {...prevBook, [event.target.name]: event.target.value};
        });
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        onSave(book);
    }

    return ({
            book,
            handleChange,
            handleSubmit
        }
    )
}

export default useForm;