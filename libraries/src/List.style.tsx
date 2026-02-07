import {Fab as MatFab} from '@mui/material';
import styled from '@emotion/styled';

export const Fab = styled(MatFab)`
    &&& {
        position: fixed;
        bottom: 0;
        left: 50%;
        margin-bottom: 20px;
        transform: translateX(-50%);
    }
`