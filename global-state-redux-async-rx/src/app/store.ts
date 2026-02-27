import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import booksReducer from '../features/books/booksSlice'
import loginReducer from '../features/login/loginSlice'
import {createEpicMiddleware} from "redux-observable";
import rootEpic from "./rootEpic";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        books: booksReducer,
        login: loginReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(epicMiddleware)
});

epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

