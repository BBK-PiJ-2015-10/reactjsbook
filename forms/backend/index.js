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

server.use(cors());
server.use(express.urlencoded({extended: true}));

server.get('/health', (req, res) => {
    console.log('Something called health check');
    res.send("Health is ok");
})

server.use('/books', (req, Response, next) => {
    if (req.methods === 'GET') {
        console.log("WAKE UP");
    }
    next();
});

server.listen(3001, () => {
    console.log(`Starting server listening on port 3001`);
});