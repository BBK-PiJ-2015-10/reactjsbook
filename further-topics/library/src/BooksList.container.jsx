import {useEffect, useState} from 'react';
import axios from "axios";
import BooksList from "./BooksList";

const client = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER
});

function BooksListContainer() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    // using default react http features
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);
    //             if (!response.ok) {
    //                 throw new Error (`Request to fetch books failed with ${response.statusMessage}`);
    //             }
    //             const data = await response.json();
    //             setBooks(data);
    //         } catch (error){
    //             setError(error);
    //         }
    //     })();
    // }, []);

    // useEffect(() => {
    //     fetch('http://localhost:3001/books')
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`Request to fetch books failed with ${response.statusMessage}`);
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setBooks(data);
    //         })
    //         .catch((error) => setError(error));
    // },[]);

    useEffect(() => {
        (async () => {
            try {
                const {data} = await client.get(`/books`);
                setBooks(data);
            } catch (error) {
                setError(error);
            }
        })();
    }, []);

    return <BooksList error={error} books={books}/>;
}

export default BooksListContainer;
