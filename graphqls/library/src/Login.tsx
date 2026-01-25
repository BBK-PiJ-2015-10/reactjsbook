import {useReactiveVar} from "@apollo/client";
import React, {ChangeEvent, FormEvent, useState} from "react";
import apolloClient, {token} from "./apolloClient";

const Login: React.FC = () => {

    const serverToken = useReactiveVar(token);

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        setCredentials((prevCredentials) => (
            {
                ...prevCredentials,
                [event.target.name]: event.target.value,
            }
        ));
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3001/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            })
        const data = await response.text();
        apolloClient.resetStore();
        token(data);
    };

    if (serverToken !== '') {
        return <div></div>
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" value={credentials.username} onChange={handleInputChange} name="username"
                       id="username"/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" value={credentials.password} onChange={handleInputChange} name="password"
                       id="password"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Login;