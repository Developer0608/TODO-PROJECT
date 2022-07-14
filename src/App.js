import Header from "./Components/Header";
import Todo from "./Components/Todos";
import TodoItem from "./Components/TodoItem";
import {useState} from "react";

function App() {
    const [list, setList] = useState([
      {
          "title" : "Go to market",
          "desc" : "I am going to go to market"
      },
      {
          "title" : "Go to school",
          "desc" : "I am going to school"
      },
      {
          "title" : "Go to play",
          "desc" : "I am going to play"
      }
    ]);

    const addTodo = (newTodo) => {
        console.log('##############', newTodo);
        // const newTodo = {
        //     title : title,
        //     desc : desc
        // };
        // console.log("On addTodo is triggered", e);
       setList([...list, newTodo]);
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

export default App;
