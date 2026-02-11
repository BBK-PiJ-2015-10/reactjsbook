import React, {ChangeEvent, FormEvent, useState, SubmitEvent} from "react";

type Props = {
    onLogin: (username: string, password: string) => void
}

const Login: React.FC<Props> = ({onLogin}) => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setCredentials((prevCredentials) => ({
                ...prevCredentials, [event.target.name]: event.target.value
            }
        ));
    }

    function handleSubmit(event: SubmitEvent<HTMLFormElement>): void {
        event.preventDefault();
        onLogin(credentials.username, credentials.password);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" value={credentials.username}
                       onChange={handleChange} name="username" id="username"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" value={credentials.password}
                       onChange={handleChange} name="password" id="password"/>
            </div>
            <div>
                <button type="submit">submit</button>
            </div>
        </form>
    )
};

export default Login;