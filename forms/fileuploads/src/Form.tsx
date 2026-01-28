import React, {
    ChangeEvent,
    FormEvent,
    useEffect,
    useRef,
    useState
} from "react";

import {InputBook, Book} from "./Book";

const initialBook: InputBook = {
    title: '',
}

type Props = {
    onSave: (Book: FormData) => void;
    book?: Book;
};

const Form: React.FC<Props> = ({onSave, book: inputBook}) => {

    const [book, setBook] = useState<InputBook>(initialBook);

    useEffect(() => {
        if (inputBook) {
            setBook(inputBook);
        }
    }, [inputBook]);

    const fileRef = useRef<HTMLInputElement>(null);

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setBook((prevBook) => {
            return {...prevBook, [event.target.name]: [event.target.value]};
        });
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', book.title);
        if (fileRef.current?.files && fileRef.current?.files[0]) {
            console.log("Loading image file");
            formData.append('image', fileRef.current?.files[0]);
        } else {
            console.log("Nothing to load");
        }
        onSave(formData);
        setBook(initialBook);
    }

    return (
        <form className="Form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={book.title}
                    onChange={handleChange}
                    data-testid="title"
                />
            </div>
            <div>
                <label htmlFor="image">Image: </label>
                <input
                    type="file"
                    id="image"
                    ref={fileRef}
                />
            </div>
            <div>
                <button type="submit" data-testid="submit">
                    Save
                </button>
            </div>

        </form>
    )
};

export default Form;

