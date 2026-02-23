import {takeLatest, put} from '@redux-saga/core/effects';
import {Book} from './books';
import {loadDataAction} from './books.actions';

function* loadData(): Generator {
    try {
        const response: Response = (
            yield fetch(
                'http://localhost:3001/books'
            )) as Response
        if (response.ok) {
            const data = (yield response.json()) as Book[]
            yield put(loadDataAction.success(data));
        } else {
            yield put(loadDataAction.failure());
        }
    } catch (e) {
        yield put(loadDataAction.failure());
    }
}

export default function* bookSaga() {
    yield takeLatest(loadDataAction.request, loadData)
}