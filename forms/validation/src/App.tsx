import React from 'react';
import './App.css';
import {InputBook} from "./Book";
//import Form from "./Form";
import FormWithSchemaValidation from "./FormWithSchemaValidation";
import './Form.scss'

const App: React.FC = () => {
        return (
            <div>
                <FormWithSchemaValidation onSave={(book: InputBook) => console.log(`Saving on firstForm ${book}`)}/>
                <hr/>
                <FormWithSchemaValidation onSave={(book: InputBook) => console.log(`Saving on secondForm ${book}`)}
                                          book={{
                                              id: 1,
                                              title: 'JavaScript',
                                              author: 'Philip Ackermann',
                                              isbn: '978-3836286299',
                                          }}
                />
            </div>
        )
    }
;


export default App;
