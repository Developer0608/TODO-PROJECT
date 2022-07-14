import React from "react"
import AddTodo from "./AddTodo";

const TodoItem = ({list, onDelete, onAdd}) => {
    return (
        <>

            <div className="todoitem-container">
                <AddTodo onAdd={onAdd}/>
                {list.length === 0 ? "NO TODO LIST":list.map((value, index) => {
                    return (
                        <div key={index} className="todo-items-container">
                            <p>Sr.No : {index+1}</p>
                            <p>Title : {value.title}</p>
                            <p>Description : {value.desc}</p>
                            <button className="btn btn-sm btn-danger" onClick={(e) => {onDelete(value)}}>Delete</button>
                        </div>
                        )

                })}
            </div>
        </>
    )
}

export default TodoItem;