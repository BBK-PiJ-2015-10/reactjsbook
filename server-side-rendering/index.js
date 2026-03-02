import {readFileSync} from 'node:fs';
import express from 'express';
import React from "react";
import ReactDOMServer from 'react-dom/server';
import App from './frontend/src/App'

const port = 3000
const server = express();

let books = [
    {
        id: '1',
        title: 'JavaScript V2 - The Comprehensive Guide',
        isbn: '978-38'
    },
    {
        id: '2',
        title: 'Clean Code V3',
        isbn: '978-013'
    },
    {
        id: '3',
        title: 'Design Patterns V5',
        isbn: '978-020163'
    }
];

server.get('/', (request, response) => {
    const app = ReactDOMServer.renderToString(<App/>);
    console.log('Sending get request to front end');

    const fileContent = readFileSync(
        './frontend/build/index.html',
        'utf-8'
    ).replace(
        '<div id="root"></div>',
        `<div id="root">${app}</div>
         <script>window._data_ = ${JSON.stringify(books)}</script>`
    );
    response.send(fileContent);
});

server.delete('/books/:id', (req, resp) => {
    console.log(`Someone ask to delete ${id}`)
    const id = parseInt(req.params.id, 10);
    console.log(`Removing book with id ${id}`)
    books = books.filter((book) => book.id != id)
    resp.statusCode = 204;
    resp.send();
})

server.use(express.static('./frontend/build'));

server.listen(port, () => {
    console.log(`Server is listening to http://localhost:${port}`);
})