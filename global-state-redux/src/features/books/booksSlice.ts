import {createSlice} from "@reduxjs/toolkit";
import {Book} from './books';
import booksData from "./booksData";
import {RootState} from "../../app/store";


export type BooksState = Book[];

export const booksSlice = createSlice({
    name: 'books',
    initialState: {books: booksData},
    reducers: {}
});

export const selectBooks = (state: RootState) => state.books.books

export default booksSlice.reducer;