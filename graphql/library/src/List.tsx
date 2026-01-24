import {gql} from "@apollo/client";
import {useQuery} from "@apollo/client/react";
import React from "react";

type Book = {
    id: string;
    title: string;
    isbn: string;
};

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

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.error('GraphQL Error:', error);
        return (
            <p>{error.stack}</p>
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
            ))}
            </tbody>
        </table>
    );

};

export default List;
