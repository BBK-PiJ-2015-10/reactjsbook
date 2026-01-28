import {fireEvent} from "@testing-library/react";
import {render, screen} from "@testing-library/react";
import Form from "./Form"
import {Book} from "./Book";

describe('form', () => {
    it('should create a new book', () => {
        const onSave = jest.fn();
        render(<Form onSave={onSave}/>)
        fireEvent.change(screen.getByTestId('title'), {
            target: {value: 'Design Patterns'},
        });
        fireEvent.change(screen.getByTestId('author'), {
            target: {value: 'Erich Gamma'}
        });
        fireEvent.change(screen.getByTestId('isbn'), {
            target: {value: '1232'}
        })
        fireEvent.click(screen.getByTestId('submit'))
        expect(onSave).toHaveBeenCalledWith({
            title: 'Design Patterns',
            author: 'Erich Gamma',
            isbn: '1232'
        });
    });
    it('should modify an existing book', () => {
        const book = {
            id: 2,
            title: 'Clean Code',
            author: 'Robert Martin',
            isbn: '1234',
            rating: 2
        }
        const onSave = jest.fn();
        render(<Form onSave={onSave} book={book}/>)
        fireEvent.change(screen.getByTestId('author'), {
            target: {value: 'Robert C.Martin'}
        })
        fireEvent.click(screen.getByTestId('submit'));
        expect(onSave).toHaveBeenCalledWith({
            id: 2,
            title: 'Clean Code',
            author: 'Robert C.Martin',
            isbn: '1234',
            rating: 2
        })
    });
});
