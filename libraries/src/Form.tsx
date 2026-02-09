import React, {useEffect} from "react";
//import * as yup from 'yup';
import validationSchema from "./ValidationSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField, Button
} from "@mui/material";
import {useForm} from "react-hook-form";
import {InputBook} from "./Book";

interface Props {
    open: boolean;
    book?: InputBook;
    onSave: (book: InputBook) => void;
    onClose: () => void;
}

const Form: React.FC<Props> = ({
                                   open,
                                   book = {title: '', author: '', isbn: ''},
                                   onSave,
                                   onClose
                               }) => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm<InputBook>({
        defaultValues: book,
        resolver: yupResolver(validationSchema)
    });

    useEffect(() => {
        if (book.id) {
            reset(book);
        }
    }, [book, reset]);

    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title"
                aria-describedby="form-dialog-description">
            <DialogTitle id="form-dialog-title">
                {book.id ? 'Edit book' : 'Create new Book'}
            </DialogTitle>
            <form onSubmit={handleSubmit(onSave)}>
                <DialogContent id="form-dialog-description">
                    <div>
                        <TextField {...register('title')} error={!!errors.title} label='Title'/>
                        {errors.title && (<div style={{color: 'red'}}>{errors.title.message}</div>)}
                    </div>
                    <div>
                        <TextField {...register('author')} error={!!errors.author} label='author'/>
                        {errors.author && (<div style={{color: 'red'}}>{errors.author.message}</div>)}
                    </div>
                    <div>
                        <TextField {...register('isbn')} error={!!errors.isbn} label='isbn'/>
                        {errors.isbn && (<div style={{color: 'red'}}>{errors.isbn.message}</div>)}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button color="primary" type="submit">
                        Save
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )

};

export default Form;