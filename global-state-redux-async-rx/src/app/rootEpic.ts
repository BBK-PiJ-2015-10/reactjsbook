import {combineEpics} from "redux-observable";
import booksEpic from '../features/books/books.epics';
import loginEpic from "../features/login/login.epics";
import {RootState} from "./store";

export default combineEpics<any, any, RootState>(booksEpic, loginEpic);