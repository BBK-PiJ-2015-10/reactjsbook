import React from 'react';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {Book} from '../lazy/Book'

async function getBooks(): Promise<Book[]> {
    const response = await fetch('http://localhost:3001/books');
    if (!response.ok) {
        throw new Error()
    }
    const data = await response.json();
    return data;
}

async function removeBook(id: number) {
    const response = await fetch(`http://localhost:3001/books/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw Error(`Unable to delete books with id: ${id}`)
    }
}

const List: React.FC = () => {

    const queryClient = useQueryClient();

    const {data, isLoading, isError} = useQuery({
        queryKey: ['books'],
        queryFn: getBooks
    });
    const mutation = useMutation({
        mutationFn: removeBook,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['books']});
        }
    });


    if (isLoading) {
        return <div>Loading data ...</div>
    }

    if (isError) {
        return <div>{`An error has happened`}</div>
    }

    return (
        <ul>
            {data?.map((book) => (
                <li key={book.id}>
                    {book.title}
                    <button onClick={() => mutation.mutate(book.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )


}

export default List;
