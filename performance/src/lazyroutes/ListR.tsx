import React, {Suspense} from 'react';
import {Link} from "react-router-dom";
import {Book} from '../lazy/Book'

type Props = {
    books: Book[]
}

const ListR: React.FC<Props> = ({books}) => {
    console.log('WOOF WOOF', books.length)
    return (
        <>
            {books.map((book) => (
                    <div key={book.id}>
                        {book.title}
                        <Link to={`/details/${book.id}`}>Details</Link>
                </div>
                )
            )
            }
        </>
    )
};

export default ListR;

//{/* <Link to={`/details/${book.id}`}>Details</Link> */}
//  {books.map((book) => {
//                 <div key={book.id}>
//                     {book.title}
//                 </div>
//             })}