import { useState } from 'react';
import './BooksList.css';
import './BooksListItem';
import BooksListItem from "./BooksListItem";

const initialBooks = [
    {
        id: 1,
        title: 'first book',
        author: 'god',
        isbn: '12343',
        rating: 5
    },
    {
        id: 2,
        title: 'second book',
        isbn: '4567',
        rating: 4
    },
    {
        id: 3,
        title: 'third book',
        author: 'godana',
        isbn: '891011',
        rating: 2
    }
];

 function BooksList(){

     const [books, ] = useState(initialBooks);

     if (books.length === 0){
         return <div>No books found</div>;
     } else {
         return (
             <table>
                 <thead>
                 <tr>
                     <th>Id</th>
                     <th>Title</th>
                     <th>Author</th>
                     <th>ISBN</th>
                     <th>Rating</th>
                 </tr>
                 </thead>
                 <tbody>
                 {books.map((book) => (
                     <BooksListItem key={book.id} book={book} />
                 ))}
                 </tbody>
             </table>
         );
     }
 }

 export default BooksList;