import { fireEvent, screen, act} from "@testing-library/react";
import { render} from "@testing-library/react";
//import FormWithSchemaValidation from "./FormWithSchemaValidation";
import Form from "./Form";


describe('Form with Schema Validation',() => {
    it('should submit a form successfully', async () => {
        const onSave = jest.fn();
        render(<Form onSave={onSave}/>)
        fireEvent.change(screen.getByTestId('title'),{
            target: { value: 'Design Patterns'}
        })
        fireEvent.change(screen.getByTestId('author'),{
            target: { value : 'Eric Gamma'}
        });
        fireEvent.change(screen.getByTestId('isbn'),{
           target: { value: '978-0201633610'}
        });
        await act(() => {
            fireEvent.click(screen.getByTestId('submit'));
        })
        expect(onSave).toHaveBeenCalledWith({
            "title": 'Design Patterns',
            "author": 'Eric Gamma',
            "isbn": '978-0201633610'
        },expect.anything()
        );
    });
});

