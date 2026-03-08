import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {Book} from '../lazy/Book'

async function getBooks(): Promise<Book[]> {
    const response = await fetch('http://localhost:3001/books');
    if (!response.ok) {
        throw new Error()
    }
    const data = response.json();
    return data;
}

const List: React.FC = () => {

    const {data, isLoading, isError} = useQuery({
        queryKey: ['books'],
        queryFn: getBooks
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
                <li key={book.id}>{book.title}</li>
            ))}
        </ul>
    )


}

export default List;
