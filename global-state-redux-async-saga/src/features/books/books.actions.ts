import {createAsyncAction} from "typesafe-actions";
import {Book} from './books';

export const loadDataAction = createAsyncAction(
    'book/loadData/pending',
    'book/loadData/fullfilled',
    'book/loadData/rejected',
)<void, Book[], void>();