import {createSlice, createSelector, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import {Book, InputBook} from './books';
import booksData from "./booksData";
import {RootState} from "../../app/store";

// export type BooksState = Book[]

export type BooksState = {
    books: Book[],
    loadingState: null | 'pending' | 'completed' | 'error',
    removeState: null | 'pending' | 'completed' | 'error',
    ratingFilter: number | null;
};

// export const booksSlice = createSlice({
//     name: 'books',
//     initialState: {books: booksData},
//     reducers: {},
// });

export const loadData = createAsyncThunk(
    'books/loadData',
    async (object, {rejectWithValue}) => {
        try {
            console.log("Trying to fetch books");
            const response = await fetch('http://localhost:3001/books');
            console.log("Fetched books");
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                return data;
            } else {
                console.log("Failing")
                return Promise.reject();
            }
        } catch (e) {
            console.log("Failing2")
            return rejectWithValue(e);
        }
    }
);

export const deleteData = createAsyncThunk(
    'books/remove',
    async (id: number, {rejectWithValue}) => {
        try {
            const response = await fetch(`http://localhost:3001/books/${id}`,
                {method: 'DELETE'});
            if (response.ok) {
                return id;
            } else {
                return Promise.reject();
            }
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);


export const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        loadingState: null,
        removeState: null,
        ratingFilter: null,
    } as BooksState,
    reducers: {
        // remove(state, action: PayloadAction<number>) {
        //     const index = state.books.findIndex(
        //         (book) => book.id === action.payload
        //     );
        //     state.books.splice(index, 1)
        // },
        save(state, action: PayloadAction<InputBook>) {
            if (action.payload.id) {
                const index = state.books.findIndex((book) => book.id === action.payload.id);
                state.books[index] = action.payload as Book;
            } else {
                const nextId = Math.max(...state.books.map(
                    (book) => book.id)) + 1;
                state.books.push({...action.payload, id: nextId})
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loadData.pending, (state) => {
                state.loadingState = 'pending';
            })
            .addCase(loadData.fulfilled, (state, action) => {
                state.loadingState = 'completed';
                state.books = action.payload;
            })
            .addCase(loadData.rejected, (state) => {
                state.loadingState = 'error';
            });
        builder
            .addCase(deleteData.pending, (state) => {
                state.removeState = 'pending';
            })
            .addCase(deleteData.fulfilled, (state, action) => {
                state.removeState = 'completed';
                const index = state.books.findIndex(
                    (book) => book.id === action.payload
                );
                state.books.splice(index, 1)
            })
            .addCase(deleteData.rejected, (state) => {
                state.removeState = 'error';
            })
    }
});

export const {save} = booksSlice.actions;

export const selectBooks = (state: RootState) => state.books.books

export const selectLoadingState = (state: RootState) => state.books.loadingState;
export const selectRemoveState = (state: RootState) => state.books.removeState;

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