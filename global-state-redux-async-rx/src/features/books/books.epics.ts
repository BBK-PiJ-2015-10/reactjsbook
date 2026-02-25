import {combineEpics, ofType, Epic} from "redux-observable";
import {from, of, pipe} from "rxjs";
import {map, catchError, switchMap} from "rxjs";
import {loadDataAction, removeAction} from "./books.actions";

// Function that receives a stream of actions and return a stream of actions
// $ to signal data or event streams
const loadData: Epic = (action$) =>
    action$.pipe(
        ofType(loadDataAction.request.toString()),
        // combiner of outer stream (action stream ) with inner stream(http call)
        switchMap(() =>
            // from to create observable from the fetch: Promise
            from(fetch('http://localhost:3001/books').then((response) => {
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

const remove: Epic = (action$) =>
    action$.pipe(
        ofType(removeAction.request.toString()),
        switchMap(({payload: id}) =>
            from(fetch(`http://localhost:3001/books/${id}`, {method: 'DELETE'}).then((response) => {
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

export default combineEpics(loadData, remove);