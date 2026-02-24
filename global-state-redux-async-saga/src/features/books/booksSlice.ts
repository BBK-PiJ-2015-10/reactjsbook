import {createSlice, createSelector, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {ActionType, getType} from "typesafe-actions";
import {Book, InputBook} from './books';
import {loadDataAction, removeAction} from "./books.actions";
//import booksData from "./booksData";
import {RootState} from "../../app/store";

// export type BooksState = Book[]

export type BooksState = {
    books: Book[],
    loadingState: null | 'pending' | 'completed' | 'error',
    removeState: null | 'pending' | 'completed' | 'error',
    savingState: null | 'pending' | 'completed' | 'error',
    ratingFilter: number | null;
};

export const saveData = createAsyncThunk(
    'books/save',
    async (book: InputBook, {rejectWithValue}) => {
        try {
            let httpMethod = 'POST'
            if (book.id) {
                httpMethod = 'PUT'
            }
            const response = await fetch('http://localhost:3001/books/',
                {
                    method: httpMethod,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(book)
                });
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                return Promise.reject()
            }
        } catch (e) {
            console.log('Could not save book');
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
        savingState: null,
        ratingFilter: null,
    } as BooksState,
    reducers: {
        remove(state, action: PayloadAction<number>) {
            const index = state.books.findIndex(
                (book) => book.id === action.payload
            );
            state.books.splice(index, 1)
        },
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
            .addCase(getType(loadDataAction.request), (state) => {
                state.loadingState = 'pending';
            })
            .addCase(getType(loadDataAction.success), (state, action: ActionType<typeof loadDataAction.success>) => {
                state.loadingState = 'completed';
                state.books = action.payload;
            })
            .addCase(getType(loadDataAction.failure), (state) => {
                state.loadingState = 'error';
            });
        builder
            .addCase(getType(removeAction.request), (state) => {
                state.removeState = 'pending';
            })
            .addCase(getType(removeAction.success), (state, action: ActionType<typeof removeAction.success>) => {
                state.removeState = 'completed';
                const index = state.books.findIndex(
                    (book) => book.id === action.payload
                );
                state.books.splice(index, 1)
            })
            .addCase(getType(removeAction.failure), (state) => {
                state.removeState = 'error';
            });
        builder
            .addCase(saveData.pending, (state) => {
                state.savingState = 'pending';
            })
            .addCase(saveData.fulfilled, (state, action) => {
                state.savingState = 'completed';
                if (action.payload.id) {
                    const index = state.books.findIndex((book) => book.id === action.payload.id);
                    state.books[index] = action.payload as Book;
                } else {
                    const nextId = Math.max(...state.books.map(
                        (book) => book.id)) + 1;
                    state.books.push({...action.payload, id: nextId})
                }
            })
            .addCase(saveData.rejected, (state) => {
                state.savingState = 'error';
            });
    }
});

//export const {save} = booksSlice.actions;

export const selectBooks = (state: RootState) => state.books.books

export const selectLoadingState = (state: RootState) => state.books.loadingState;
export const selectRemoveState = (state: RootState) => state.books.removeState;
export const selectSaveState = (state: RootState) => state.books.savingState;

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