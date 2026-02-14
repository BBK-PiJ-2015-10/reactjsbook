import React, {useEffect} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useForm} from 'react-hook-form'
import {useNavigate, useParams} from "react-router-dom";
import {InputBook} from "./Book";

const Form: React.FC = () => {
    const {register, handleSubmit, reset} = useForm<InputBook>({
        defaultValues: {
            title: '',
            author: '',
            isbn: ''
        }
    })
    const navigate = useNavigate();
    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3001/books/${id}`)
                .then((response) => response.json())
                .then((data) => reset(data))
        }
    }, [id, reset]);

    async function handleSave(formData: InputBook) {
        let url = 'http://localhost:3001/books';
        let method = 'POST';
        if (formData.id) {
            method = 'PUT';
            url += `/${formData.id}`;
        }
        await fetch(url, {
            method,
            body: JSON.stringify(formData),
            headers: {'content-type': 'application/json'}
        });
        handleClose();
    }

    function handleClose() {
        navigate('/list')
    }

    return (
        <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title"
                aria-describedby="form-dialog-description">
            <form onSubmit={handleSubmit(handleSave)}>
                <DialogTitle id="form-dialog-title">
                    {id ? 'EditBook' : 'Create new book'}
                </DialogTitle>
                <DialogContent id="form-dialog-description">
                    <div>
                        Title:
                        <input {...register('title')} />
                    </div>
                    <div>
                        Author:
                        <input {...register('author')}/>
                    </div>
                    <div>
                        ISBN:
                        <input {...register('isbn')}/>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button color="primary" type="submit">
                        Saving
                    </Button>
                </DialogActions>
            </form>
            Forms works!
        </Dialog>
    );
};

export default Form;