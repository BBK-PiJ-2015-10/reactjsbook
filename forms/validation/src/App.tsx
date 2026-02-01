import React from 'react';
import './App.css';
import {InputBook} from "./Book";
import Form from "./Form";

const App: React.FC = () => {
        return (
            <div>
                <Form onSave={(book: InputBook) => console.log(`Saving on firstForm ${book}`)}/>
                <hr/>
                <Form onSave={(book: InputBook) => console.log(`Saving on secondForm ${book}`)}
                      book={{
                          id: 1,
                          title: 'JavaScript - The Comprehensive Guide',
                          author: 'Philip Ackermann',
                          isbn: '978-3836286299',
                      }}
                />
            </div>
        )
    }
;


export default App;
