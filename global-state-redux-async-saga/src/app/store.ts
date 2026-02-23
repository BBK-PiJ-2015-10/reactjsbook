import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import saga from 'redux-saga';
import counterReducer from '../features/counter/counterSlice';
import booksReducer from '../features/books/booksSlice'
//import rootSaga from './rootSaga';

const sagaMiddleware = saga();

export const store = configureStore({
        reducer: {
            counter: counterReducer,
            books: booksReducer
        },
        devTools: true,
        middleware(getDefaultMiddleWare){
            return [...getDefaultMiddleWare(),sagaMiddleware]
        }
    });

//sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

