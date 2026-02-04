import React from 'react';
import {
    Paper, Table, TableBody, TableCell, TableHead, TableRow
} from "@mui/material";
import {StarBorder, Star} from '@mui/icons-material';
import {Book} from './Book'

type Props = {
    books: Book[]
}

const List: React.FC<Props> = ({books}) => {
    return (
        <Paper>
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
                    {books.map((book) => (
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