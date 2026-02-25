import {combineEpics, ofType, Epic} from "redux-observable";
import {from, of} from "rxjs";
import {map, catchError, switchMap} from "rxjs";
import {loadDataAction} from "./books.actions";

const loadData: Epic = (action$) =>
    action$.pipe(
        ofType(loadDataAction.request.toString()),
        switchMap(() =>
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