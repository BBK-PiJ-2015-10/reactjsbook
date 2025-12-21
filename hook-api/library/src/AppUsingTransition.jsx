import {useState, useTransition} from "react";
import './App.css';

function AppUsingTransition() {

    const [searchString, setSearchString] = useState('');
    const [books, setBooks] = useState([]);
    // This is done to delay the start transition function
    const [isPending, startTransition] = useTransition();

    function search() {
        startTransition(() => {
            fetch(
                `${process.env.REACT_APP_API_SERVER}/books?author=${searchString}`)
                .then((response) => response.json())
                .then((data) => setBooks(data));
        });
    }

    return (
        <div>
            <div>
                <input type="text" value={searchString} onChange={(event) => setSearchString(
                    event.target.value
                )}/>
                <button onClick={() => search()}>filter</button>
            </div>
            {isPending && <div>Loading</div>}
            {!isPending && (
                <ul>
                    {books.map((book) => (
                        <li key={book.id}>{book.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );

}

export default AppUsingTransition;