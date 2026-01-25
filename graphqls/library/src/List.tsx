import {useQuery} from "@apollo/client/react";
import {gql} from "@apollo/client";
import React from "react";

type Book = {
    id: string;
    title: string;
    isbn: string
}

const booksQuery = gql`
    query {
        book {
            id
            title
            isbn
        }
    }
`;

const List: React.FC = () => {

    const {data, loading, error} = useQuery<{ book: Book[] }>(booksQuery);

    if (loading) {
        return (
            <div>
                Loading
            </div>
        )
    }
    ;

    if (error) {
        console.log(`Woof with ${error}`)
        return (
            <div>
                An error has occurred
            </div>
        )
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>ISBN</th>
            </tr>
            </thead>
            <tbody>
            {data?.book.map((book) => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.isbn}</td>
                    </tr>
                )
            )}
            </tbody>
        </table>
    );
};

export default List;
