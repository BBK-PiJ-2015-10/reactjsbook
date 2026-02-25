import {takeLatest, put} from '@redux-saga/core/effects';
import {Book} from './books';
import {removeAction, saveAction} from './books.actions';

function* remove({payload: id}: ReturnType<typeof removeAction.request>): Generator {
    try {
        const response: Response = (
            yield fetch(`http://localhost:3001/books/${id}`, {method: 'DELETE'})
        ) as Response
        if (response.ok) {
            yield put(removeAction.success(id));
        } else {
            yield put(removeAction.failure())
        }
    } catch (e) {
        yield put(removeAction.failure())
    }
}

function* save({payload: book}: ReturnType<typeof saveAction.request>): Generator {
    try {
        let url = 'http://localhost:3001/books'
        let httpMethod = 'POST'
        if (book.id) {
            url += `/${book.id}`;
            httpMethod = 'PUT';
        }
        const response: Response = (
            yield fetch(url,
                {
                    method: httpMethod,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(book)
                })
        ) as Response
        if (response.ok) {
            const data = (yield response.json()) as Book;
            put(saveAction.success(data));
        } else {
            put(saveAction.failure());
        }

    } catch (e) {
        yield put(saveAction.failure());
    }
}

export default function* bookSaga() {
    //yield takeLatest(loadDataAction.request, loadData);
    yield takeLatest(removeAction.request, remove);
    yield takeLatest(saveAction.request, save);
}