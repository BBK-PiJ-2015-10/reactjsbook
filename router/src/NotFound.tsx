import React from 'react';
import {Container} from "@mui/material";
import {Link} from "react-router-dom";

const NotFound: React.FC = () => {

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1>... OOPS, Something went off</h1>
            <p>
                <Link to="/">Go to home page</Link>
            </p>
        </Container>
    )
};

export default NotFound