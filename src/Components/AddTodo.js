import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTodo = ({onAdd}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const onDescriptionChange = (e) => {
        setDesc(e.target.value);
    }

    const submit = (e) => {
        console.log(title, desc);
        e.preventDefault();
        if(!title  || !desc){
            return toast.warning("Please fill required fields");
        }
        onAdd({title : title, desc : desc});
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <ToastContainer />
            <Form onSubmit={submit} className="input-container">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" onChange={onTitleChange} value={title} placeholder="Title " />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={desc} onChange={onDescriptionChange} placeholder="Description" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Todo
                </Button>

            </Form>
        </>
    )
}

export default AddTodo;