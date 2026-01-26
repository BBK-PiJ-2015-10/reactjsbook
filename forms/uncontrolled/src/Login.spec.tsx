import Login from "./Login";
import {fireEvent, screen} from "@testing-library/react";
import {render} from "@testing-library/react";
import LoginWithErrorHandling from "./LoginWithErrorHandling";

describe('login', () => {
        it('should call onLogin correctly after submitting the form ', () => {
            const onLogin = jest.fn();
            render(<Login onLogin={onLogin}/>)

            const username = screen.getByTestId('username');
            const password = screen.getByTestId('password');
            const submit = screen.getByTestId('submit');

            fireEvent.change(username, {target: {value: 'testUser'}});
            fireEvent.change(password, {target: {value: 'testPassword'}});
            fireEvent.click(submit);

            expect(onLogin).toHaveBeenCalledWith('testUser', 'testPassword');

        });
        it('should call onLogin correctly after submitting the form with errorHandling ', () => {
            const onLogin = jest.fn();
            render(<LoginWithErrorHandling onLogin={onLogin}/>)

            const username = screen.getByTestId('username');
            const password = screen.getByTestId('password');
            const submit = screen.getByTestId('submit');

            fireEvent.change(username, {target: {value: 'testUser'}});
            fireEvent.change(password, {target: {value: 'testPassword'}});
            fireEvent.click(submit);

            expect(onLogin).toHaveBeenCalledWith('testUser', 'testPassword');
            expect(screen.queryByTestId('loginError')).not.toBeInTheDocument();
            expect(screen.queryByTestId('validationError')).not.toBeInTheDocument();

        });
        it('should display an external login error ', () => {
            render(<LoginWithErrorHandling onLogin={jest.fn()} loginError="Login failed"/>)
            const loginError = screen.getByTestId('loginError');
            expect(loginError).toBeInTheDocument();
            expect(loginError).toHaveTextContent('Login failed');
        });
        it('should display an error if validation fails ', () => {
            const onLogin = jest.fn();
            render(<LoginWithErrorHandling onLogin={onLogin}/>)

            const username = screen.getByTestId('username');
            const submit = screen.getByTestId('submit');

            fireEvent.change(username, {target: {value: 'testUser'}});
            fireEvent.click(submit);

            const validationError = screen.getByTestId("validationError");

            expect(onLogin).not.toHaveBeenCalled();
            expect(screen.queryByTestId('loginError')).not.toBeInTheDocument();
            expect(validationError).toBeInTheDocument();
            expect(validationError).toHaveTextContent("Please enter a username and a password.");

        });


    }
);