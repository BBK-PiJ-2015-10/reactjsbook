import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useAppDispatch} from "../../app/Hooks";
import {loginAction} from "./login.actions";

const Login: React.FC = () => {

    const dispatch = useAppDispatch();

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    function handleCredentialsInputChange(event: ChangeEvent<HTMLInputElement>): void {
        setCredentials((prevCredentailsState) => ({
            ...prevCredentailsState,
            [event.target.name]: event.target.value
        }));
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        dispatch(loginAction.request(credentials));
    }

    return (<form onSubmit={handleFormSubmit}>
        <div>
            <label htmlFor="username">Username: </label>
            <input type="text" value={credentials.username}
                   onChange={handleCredentialsInputChange} name="username" id="username"/>
        </div>
        <div>
            <label htmlFor="password">Password: </label>
            <input type="text" value={credentials.password}
                   onChange={handleCredentialsInputChange} name="password" id="password"/>
        </div>
        <button type="submit">submit</button>
    </form>)
};

export default Login;