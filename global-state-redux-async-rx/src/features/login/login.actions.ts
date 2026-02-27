import {createAsyncAction} from "typesafe-actions";

export const loginAction = createAsyncAction(
    'login/doLogin/pending',
    'log/doLogin/fulfilled',
    'log/doLogin/rejected'
)<{ username: string; password: string }, string, void>();