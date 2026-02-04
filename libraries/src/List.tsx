import React, {ChangeEvent, useState} from 'react';
import {
    Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField
} from "@mui/material";
import {StarBorder, Star} from '@mui/icons-material';
import {Book} from './Book'

type Props = {
    books: Book[]
}

const List: React.FC<Props> = ({books}) => {

    const [filter, setFilter] = useState('');

    return (
        <Paper>
            <TextField label="Filter list"
                       value={filter}
                       onChange={(event: ChangeEvent<HTMLInputElement>) =>
                           setFilter(event.target.value)}/>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>ISBN</TableCell>
                        <TableCell>Rating</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books
                        .filter((book) =>
                            book.title.toLowerCase().includes(filter.toLowerCase()))
                        .map((book) => (
                            <TableRow key={book.id}>
                                <TableCell>{book.title}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>{book.isbn}</TableCell>
                                <TableCell>
                                    {Array(5)
                                        .fill('')
                                        .map((rating, index) =>
                                            book.rating <= index ? (
                                                <StarBorder key={index}/>
                                            ) : (<Star key={index}/>
                                            )
                                        )}
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default List;