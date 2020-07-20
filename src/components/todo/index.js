import React, { useEffect } from 'react';

const Todo = (props) =>{
    return (
        <div className="tasks">
            <input type="checkbox" onChange={props.changeStatus} value={props.concluido}/>
            <input id="task" type="text" onChange={props.refreshValue} value={props.name}
                style={{backgroundColor: props.concluido ? '#2ecc71' : '#282A36'}}
            />
        </div>
    );
};

export default Todo;