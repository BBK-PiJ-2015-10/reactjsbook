import {useBooksListQuery, useDeleteBookMutation} from "./graphql/generated";
import React from "react";
import {useReactiveVar} from "@apollo/client";
import {token} from "./apolloClient";

type Book = {
    id: string;
    title: string;
    isbn: string
}

const List: React.FC = () => {

    // const {data, loading, error} = useQuery<{ book: Book[] }>(booksQuery);

    const serverToken = useReactiveVar(token);
    const {data, loading, error} = useBooksListQuery();
    const [deleteBook] = useDeleteBookMutation(
        {refetchQueries: ['BooksList']}
    );

    if (!serverToken) {
        return <></>;
    }
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
                <th></th>
            </tr>
            </thead>
            <tbody>
            {data?.book?.map((book) => book && (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.isbn}</td>
                        <td>
                            <button onClick={() => deleteBook(
                                {variables: {id: book.id}}
                            )}>
                                Delete
                            </button>
                        </td>
                    </tr>
                )
            )}
            </tbody>
        </table>
    );
};

export default List;
