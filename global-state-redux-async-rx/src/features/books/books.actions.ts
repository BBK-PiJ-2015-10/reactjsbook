import {createAsyncAction} from "typesafe-actions";
import {Book, InputBook} from './books';

export const loadDataAction = createAsyncAction(
    'books/loadData/pending',
    'books/loadData/fullfilled',
    'books/loadData/rejected',
)<void, Book[], void>();

export const removeAction = createAsyncAction(
    'books/remove/pending',
    'books/remove/fullfilled',
    'books/remove/rejected'
)<number, number, void>();

export const saveAction = createAsyncAction(
    'books/save/pending',
    'books/save/fullfilled',
    'books/save/rejected'
)<InputBook, Book, void>();