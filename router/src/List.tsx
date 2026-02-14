import React, {useState, useEffect} from "react";
import {
    IconButton, List as MuiList, ListItem, ListItemText, Fab
} from "@mui/material";
import Book from './Book';
import {Link, Outlet, useLocation} from 'react-router-dom';
import {Add, Edit,} from "@mui/icons-material";

const List: React.FC = () => {
    const location = useLocation();
    const [books, setBooks] = useState<Book[]>([]);
    useEffect(() => {
        if (location.pathname === '/list') {
            fetch('http://localhost:3001/books')
                .then((response) => response.json())
                .then((data) => setBooks(data))
        }
    }, [location]);

    return (
        <>
            <MuiList>
                {books.map((book) => (
                        <ListItem key={book.id}>
                            <ListItemText>{book.title}</ListItemText>
                            <IconButton aria-label="edit" component={Link} to={`/list/edit/${book.id}`}>
                                <Edit/>
                            </IconButton>
                        </ListItem>
                    )
                )}
            </MuiList>
            <Fab color="primary" aria-label="Add" component={Link} to={`/list/new`}>
                <Add/>
            </Fab>
            <Outlet/>
        </>
    );
};

export default List;
