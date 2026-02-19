import {createSlice, createSelector} from "@reduxjs/toolkit";
import {Book, InputBook} from './books';
import booksData from "./booksData";
import {RootState} from "../../app/store";

// export type BooksState = Book[]

export type BooksState = {
    books: Book[],
    ratingFilter: number | null;
};

// export const booksSlice = createSlice({
//     name: 'books',
//     initialState: {books: booksData},
//     reducers: {},
// });


export const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: booksData,
        ratingFilter: null
    } as BooksState,
    reducers: {},
});

export const selectBooks = (state: RootState) => state.books.books

export const selectRatingFilter = (state: RootState) => state.books.ratingFilter;

export const selectByRating = createSelector(
    [selectBooks, selectRatingFilter], (books, ratingFilter) => {
        if (ratingFilter === 0) {
            return books;
        }
        return books.filter((book) => book.rating === ratingFilter)
    }
);

export function selectBook(state: RootState): (id?: number) => InputBook {
    return (id?: number): InputBook => {
        const book = selectBooks(state).find((book) => book.id === id);
        if (!book) {
            return {
                title: '',
                author: '',
                isbn: ''
            };
        }
        return book;
    };
}

export default booksSlice.reducer;