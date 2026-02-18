import {createSlice} from "@reduxjs/toolkit";
import {Book} from './books';
import booksData from "./booksData";


export type BookState = Book[];

export const booksSlice = createSlice({
    name: 'books',
    initialState: {books: booksData},
    reducers: {}
});

export default booksSlice.reducer;