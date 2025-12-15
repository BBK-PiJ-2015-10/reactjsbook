import {useEffect, useState} from "react";
import axios from "axios";

// This is an example of using RenderProps
function BooksLoader({children}) {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
                try {
                    const {data} =
                        await axios.get(
                            `${process.env.REACT_APP_API_SERVER}/books`
                        );
                    setBooks(data);
                } catch (error) {
                    setError(error);
                }
            }
        )();
    }, []);

    return children(books, error);
}

export default BooksLoader;