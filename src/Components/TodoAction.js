import React from 'react'
import Header from "./Header";
import Todo from "./Todos";
import TodoItem from "./TodoItem";
import { useState } from "react";
import {toast} from "react-toastify";

const TodoAction = () => {
    const [list, setList] = useState([]);

    const addTodo = (newTodo) => {
        const sno = list.length + 1;
        newTodo = {
            ...newTodo,
            srNo : sno
        }
        setList([...list, newTodo]);
        return toast.success("Added successfully");
    }
    const onDelete = (e) => {
        console.log('On delete function triggered', e);
        const newList = setList(list.filter((element) => { return e !== element}));
        console.log('TODO', newList);
    }

    return (
        <>
            <div className="app-container">
                <Header header="TODO APP"/>
                <Todo />
                <TodoItem list={list} onDelete={onDelete} onAdd={addTodo}/>
            </div>
        </>
    )
}

export default TodoAction;