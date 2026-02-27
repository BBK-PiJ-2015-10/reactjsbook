import {combineEpics, ofType, Epic} from "redux-observable";
import {from, of} from "rxjs";
import {map, catchError, switchMap} from "rxjs";
import {loginAction} from "./login.actions";

const login: Epic = (action$) =>
    action$.pipe(
        ofType(loginAction.request.toString()),
        switchMap(({payload: credentials}) =>
            from(
                fetch('http://localhost:3001/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(credentials)
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            Promise.reject();
                        }
                    })
            ).pipe(
                map((data) => loginAction.success(data)),
                catchError((e) => of(loginAction.failure(e)))
            )
        )
    );

export default combineEpics(login);