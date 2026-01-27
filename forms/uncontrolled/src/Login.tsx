import React, {FormEvent, useEffect, useRef} from "react";


type Props = {
    onLogin: (username: string, password: string) => void;
}

const Login: React.FC<Props> = ({onLogin}) => {

    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        userNameRef.current!.focus();
    },[])

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onLogin(userNameRef.current!.value, passwordRef.current!.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Username:
                    <input type="text" ref={userNameRef} data-testid="username"/>
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" ref={passwordRef} data-testid="password"/>
                </label>
            </div>
            <button type="submit" data-testid="submit">submit</button>
        </form>
    );

};

export default Login;