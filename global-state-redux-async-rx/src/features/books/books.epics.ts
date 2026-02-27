import {combineEpics, ofType, Epic} from "redux-observable";
import {from, of, pipe} from "rxjs";
import {map, catchError, switchMap} from "rxjs";
import {loadDataAction, removeAction, saveAction} from "./books.actions";
import {Book} from "./books";
import {selectToken} from "../login/loginSlice";
import {RootState} from "../../app/store";
//import {RootState} from "../../app/store";

// Function that receives a stream of actions and return a stream of actions
// $ to signal data or event streams
const loadData: Epic<any, any, RootState, any> = (action$, state$) =>
    action$.pipe(
        ofType(loadDataAction.request.toString()),
        // combiner of outer stream (action stream ) with inner stream(http call)
        switchMap(() =>
            // from to create observable from the fetch: Promise
            from(fetch('http://localhost:3001/books', {
                    headers: {
                        Authorization: `Bearer ${selectToken(state$.value)}`
                    },
                }).then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return Promise.reject()
                    }
                })
            ).pipe(
                map((data) => loadDataAction.success(data)),
                catchError((error) => of(loadDataAction.failure(error)))
            )
        )
    );

const remove: Epic<any, any, RootState, any> = (action$, state$) =>
    action$.pipe(
        ofType(removeAction.request.toString()),
        switchMap(({payload: id}) =>
            from(fetch(`http://localhost:3001/books/${id}`, {
                    method: 'DELETE', headers: {Authorization: `Bearer ${selectToken(state$.value)}`}
                }).then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            return Promise.reject();
                        }
                    }
                )
            ).pipe(
                map((data) => removeAction.success(data)),
                catchError((error) => of(removeAction.failure(error))
                )
            )
        )
    )
;


const save: Epic<any, any, RootState, any> = (action$, state$) =>
    action$.pipe(
        ofType(saveAction.request.toString()),
        switchMap(({payload: book}: { payload: Book }) => {
            let url = 'http://localhost:3001/books';
            let httpMethod = 'POST';
            if (book.id) {
                url += `/${book.id}`;
                httpMethod = 'PUT';
            }
            const fetchPromise = fetch(url, {
                method: httpMethod, headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${selectToken(state$.value)}`
                }, body: JSON.stringify(book)
            }).then((response) => {
                if (response.ok) {
                    console.log("Saved " + JSON.stringify(book))
                    return response.json();
                } else {
                    return Promise.reject();
                }
            });
            return from(
                fetchPromise
            ).pipe(
                map((data) => saveAction.success(data)),
                catchError((error) => of(saveAction.failure(error)))
            );
        })
    );


export default combineEpics(loadData, remove, save);