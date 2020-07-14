import React, { useState } from 'react';
import Todo from "../../components/todo";
import "./index.css";

const Main = () => {
    const [value, setValue] = useState('');
    const [todos,setTodos] = useState([]);

    const handleInput = event =>{
        setValue(event.target.value)
    };

    const handleEnter = event =>{
        if(event.keyCode === 13){
            const newValue = [...todos, value];
            setTodos(newValue);
            setValue('')
        }
    }
    
    const todoList = () =>{
        return todos.map((todo,index) => (<Todo name={todo} key={index}/>));
    }
    return(
    <div className="listTask">
        <input id="addTodo" placeholder="Digite a tarefa..." className="addTask" value={value} onKeyDown={handleEnter} onChange={handleInput}/>
        {todoList()}
    </div>
    )
};

export default Main;