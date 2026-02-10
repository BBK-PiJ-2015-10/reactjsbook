import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import App from "./App";

const cases = [
    {
        description: 'should render the list',
        initialEntries: ['/list'],
        list: true,
        form: false,
        notFound: false
    },
    {
        description: 'should render the form',
        initialEntries: ['/form'],
        list: false,
        form: true,
        notFound: false
    },
    {
        description: 'should render the default route',
        initialEntries: ['/'],
        list: true,
        form: false,
        notFound: false
    },
    {
        description: 'should render not found component for invalid path',
        initialEntries: ['/xxx'],
        list: false,
        form: false,
        notFound: true
    },
]

describe.each(cases)('App', ({description, initialEntries, list, form, notFound}) => {
        it(description, () => {
            render(
                <MemoryRouter initialEntries={initialEntries}>
                    <App/>
                </MemoryRouter>
            );

            const listExpect = expect(screen.queryByText('List works!'));
            const formExpect = expect(screen.queryByText('Forms works!'));
            const notFoundExpect = expect(screen.queryByText('... OOPS, Something went off'));

            list ? listExpect.toBeInTheDocument() : listExpect.not.toBeInTheDocument();
            form ? formExpect.toBeInTheDocument() : formExpect.not.toBeInTheDocument();
            notFound ? notFoundExpect.toBeInTheDocument() : notFoundExpect.not.toBeInTheDocument();

        });

    }
);