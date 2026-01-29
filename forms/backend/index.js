import express from "express";
import jsonServer from "json-server";
import cors from "cors";
import fileUpload from "express-fileupload";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();

server.use(fileUpload());

server.use(express.urlencoded({extended: true}));
server.use(cors());

server.use('/books', (req, Response, next) => {
    if ((req.method === 'POST' | req.method === 'PUT') && req.files.image) {
        const file = req.files.image;
        const name = req.body.title.replace(' ', '_');
        const image = `${name}.png`;
        file.mv(`${__dirname}/public/${image}`);
        console.log("WAKE UP");
        req.body.image = image
    } else {
        console.log("got something else");
        //req.body.image = '';
    }
    next();
});


server.use(jsonServer.router('data.json'));

server.listen(3001, () => {
    console.log(`Starting server listening on port 3001`);
});