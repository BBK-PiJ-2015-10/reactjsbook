import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import saga from 'redux-saga';
import counterReducer from '../features/counter/counterSlice';
import booksReducer from '../features/books/booksSlice'
import rootSaga from '../sagas/rootSaga';
import {createEpicMiddleware} from "redux-observable";
import rootEpic from "./rootEpic";

const sagaMiddleware = saga();

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        books: booksReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(sagaMiddleware).concat(epicMiddleware)
});

sagaMiddleware.run(rootSaga);
epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

