import React from "react";
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from "@mui/material";

type Props = {
    open: boolean;
    title: string;
    text: string;
    onConfirm: (confirmation: boolean) => void;
}


const ConfirmDialog: React.FC<Props> = ({onConfirm, title, text, open}) => {
    return (
        <Dialog open={open}
                onClose={() => onConfirm(false)}
                aria-labelledby="confirm-dialog-title"
                aria-describedby="confirm-dialog-description"
        >
            <DialogTitle id="confirm-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="confirm-dialog-description">
                    {text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onConfirm(false)} color="secondary">
                    Cancel
                </Button>
                <Button onClick={() => onConfirm(true)} color="primary" autoFocus>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDialog;