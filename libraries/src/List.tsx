import React, {ChangeEvent, useState} from 'react';
import {
    Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField,
    TableSortLabel, Grid, IconButton
} from "@mui/material";
import {StarBorder, Star, Delete} from '@mui/icons-material';
import {Book} from './Book'

type Props = {
    books: Book[];
    onDelete: (book: Book) => void
}

const headers = {
    title: 'Title',
    author: 'Author',
    isbn: 'ISBN',
    MuiRating: 'Rating'
};


const List: React.FC<Props> = ({books, onDelete}) => {

    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState<{
        orderBy: keyof Book;
        order: 'asc' | 'desc';
    }>({
        orderBy: 'title',
        order: 'asc'

    });

    return (
        <Grid container>
            <Grid size={{md: 1}} sx={{display: {sm: 'none', md: 'block'}}}/>
            <Grid size={{xs: 12, md: 10}}>
                <Paper>
                    <TextField label="Filter list"
                               value={filter}
                               onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                   setFilter(event.target.value)}/>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {Object.entries(headers).map(([key, header]) => (
                                    <TableCell key={key}>
                                        <TableSortLabel
                                            active={sort.orderBy === key}
                                            direction={sort.order}
                                            onClick={() => setSort({
                                                orderBy: key as keyof Book,
                                                order: sort.order === 'asc' ? 'desc' : 'asc'
                                            })
                                            }
                                        >
                                            {header}
                                        </TableSortLabel>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {books
                                .filter((book) =>
                                    book.title.toLowerCase().includes(filter.toLowerCase()))
                                .sort((a, b) => {
                                    const compareResult = a[sort.orderBy]
                                        .toString()
                                        .localeCompare(b[sort.orderBy].toString());
                                    return sort.order === 'asc' ? compareResult : -compareResult;
                                })
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
                                        <TableCell>
                                            <IconButton color="primary" aria-label="delete book" onClick={
                                                () => onDelete(book)
                                            }>
                                                <Delete/>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
            <Grid size={{md: 1}} sx={{display: {sm: 'none', md: 'block'}}}/>
        </Grid>
    );
};

export default List;