import React, { useState } from 'react';
import Todo from "../../components/todo";
import "./index.css";

const Main = () => {
    const [value, setValue] = useState('');
    const [todos,setTodos] = useState([]);

    const handleInput = event =>{ setValue(event.target.value) };

    const handleEnter = event =>{
        if(event.keyCode === 13){
            const todo =  {
                isCheck: false,
                name: event.target.value,
            }
            const newValue = [...todos, todo];
            setTodos(newValue);
            setValue('')
            console.log(newValue);
        }
        
    }
    const handleIsCheck = todo =>{
        todo.isCheck = !todo.isCheck;
        setTodos([...todos]);
    }

    const handleValueInput = (event,todo) => {
        todo.name = event.target.value;
        const clearInput = todos.filter(todo => todo.name != "");
        setTodos([...clearInput]);
    };

    const todoList = () =>{
        if(todos.length === 0 ) return;

        return todos.map((todo,index) => 
        (<Todo 
            name={todo.name}
            changeStatus={() => handleIsCheck(todo)}
            concluido={todo.isCheck}
            refreshValue={(event) => handleValueInput(event,todo)}
            key={index}/>
        ));
    }
    
    return(
    <div className="listTask">
        <input id="addTodo" placeholder="Digite a tarefa..." className="addTask" value={value} onKeyDown={handleEnter} onChange={handleInput}/>
        {todoList()}
    </div>
    )
};

export default Main;