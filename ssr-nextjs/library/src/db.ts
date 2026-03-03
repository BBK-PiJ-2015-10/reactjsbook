import {join, dirname} from "node:path";
import {fileURLToPath} from "node:url";
import {Low} from "lowdb";
import {JSONFile} from "lowdb/node";

const __dirname = dirname(fileURLToPath(import.meta.url));

type Data = {
    books: Array<{
        id: string;
        title: string;
        isbn: string;
    }>;
}

const defaultData: Data = {books: []};
const file = join(__dirname, 'data.json');
const adapter = new JSONFile<Data>(file);
const db = new Low(adapter, defaultData);

export default db;
