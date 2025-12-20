import {useEffect, useState} from "react";

function BooksListWithSearch({searchString}) {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        console.log(`Someone is calling fetch with ${searchString}`);
        //fetch(`${process.env.REACT_APP_API_SERVER}/books?title_like=${encodeURIComponent(searchString)}`)
        fetch(`${process.env.REACT_APP_API_SERVER}/books?author=${searchString}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(`Fetched data:`,data);
                setBooks(data);
            });
    }, [searchString]);

    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>{book.title}</li>
            ))}
        </ul>
    );

}

export default BooksListWithSearch;