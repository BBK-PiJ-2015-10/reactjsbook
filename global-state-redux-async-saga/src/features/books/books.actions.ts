import {createAsyncAction} from "typesafe-actions";
import {Book} from './books';

export const loadDataAction = createAsyncAction(
    'books/loadData/pending',
    'books/loadData/fullfilled',
    'books/loadData/rejected',
)<void, Book[], void>();

export const removeAction = createAsyncAction(
    'books/remove/pending',
    'books/remove/fullfilled',
    'books/remove/rejected'
)<number,number, void>();