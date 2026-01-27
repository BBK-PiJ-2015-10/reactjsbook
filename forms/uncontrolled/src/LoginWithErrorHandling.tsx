import React, {FormEvent, useEffect, useRef, useState} from "react";
import './LoginWithErrorHandling.scss';

type Props = {
    onLogin: (username: string, password: string) => void,
    loginError?: string
}

const LoginWithErrorHandling: React.FC<Props> = ({onLogin, loginError}) => {

    const [validationError, setValidationError] = useState<string>('');

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        usernameRef.current!.focus();
    }, []);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let error = 'Please enter a username and a password.';
        const username = usernameRef.current!.value;
        const password = passwordRef.current!.value;
        if (username && password) {
            error = '';
            onLogin(username, password);
        }
        setValidationError(error);
    }

    return (
        <form onSubmit={handleSubmit} className="Login">
            {loginError && <div data-testid="loginError" className="error">{loginError}</div>}
            {validationError && (<div data-testid="validationError" className="error">{validationError}</div>)}
            <div>
                <label>
                    Username:
                    <input type="text" ref={usernameRef} data-testid="username"/>
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" ref={passwordRef} data-testid="password"/>
                </label>
            </div>
            <button type="submit" data-testid="submit">
                Login
            </button>
        </form>
    );
}

export default LoginWithErrorHandling;