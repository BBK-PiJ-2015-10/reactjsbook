import Login from "./Login";
import {fireEvent, screen} from "@testing-library/react";
import {render} from "@testing-library/react";

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
    }
);