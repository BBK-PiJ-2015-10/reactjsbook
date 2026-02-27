import {combineEpics} from "redux-observable";
import booksEpic from '../features/books/books.epics';
import loginEpic from "../features/login/login.epics";

export default combineEpics(booksEpic, loginEpic);