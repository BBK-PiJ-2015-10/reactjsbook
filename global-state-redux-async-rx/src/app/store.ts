import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import counterReducer, {CounterState} from '../features/counter/counterSlice';
import booksReducer, {BooksState} from '../features/books/booksSlice'
import loginReducer, {LoginState} from '../features/login/loginSlice'
import {createEpicMiddleware} from "redux-observable";
import rootEpic from "./rootEpic";


export interface RootState {
    counter: CounterState;
    books: BooksState;
    login: LoginState;
}

const epicMiddleware = createEpicMiddleware<any, any, RootState, any>();


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        books: booksReducer,
        login: loginReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(epicMiddleware)
});

epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
//export type RootState = ReturnType<typeof store.getState>;

