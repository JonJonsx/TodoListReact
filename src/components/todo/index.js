import React from 'react';

const Todo = (props) =>{
    return (
        <div className="tasks">
            <input type="checkbox"/>
            <input id="task" type="text" onChange={()=>{}} value={props.name}/>
        </div>
    );
};

export default Todo;