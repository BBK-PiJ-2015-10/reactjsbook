import {combineEpics} from "redux-observable";
import booksEpic from '../features/books/books.epics';

export default combineEpics(booksEpic);