import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

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
        e.preventDefault();
        console.log('@@', title, desc)
        onAdd({title : title, desc : desc});
    }
    return (
        <>
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