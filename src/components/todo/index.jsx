import React, { useEffect } from "react";
import "./index.css";


const Todo = (props) =>{
    return (
        <div className="tasks">
            <input type="checkbox" onChange={props.changeStatus} value={props.concluido}/>
            <input id="task" type="text" onChange={props.refreshValue} value={props.name}
                style={{backgroundColor: props.concluido ? '#2ecc71' : '#282A36'}}
            />
            <i class="far fa-trash-alt icon"></i>
        </div>
    );
};

export default Todo;