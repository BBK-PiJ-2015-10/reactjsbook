import React from 'react';
import Book from "./Book";

type Props = {
    book: Book;
};


const BookListItem: React.FC<Props> = ({book}) => {
    return <li>
        {book.title}
    </li>
}

export default BookListItem;