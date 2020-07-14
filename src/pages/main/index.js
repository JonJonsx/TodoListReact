import React, { Component } from 'react';
import "./index.css";


// <div className="listTask">
//     <div class="tasks">
//         <input type="checkbox"></input>
//         <input id="task" type="text" value="comprar Pao"></input>
//     </div>
//     <div class="tasks">
//         <input type="checkbox"></input>
//         <input type="text" placeholder="pao"></input>
//     </div>
// </div>


export default class main extends Component {
    todos = [{
        concluded: false,
        text : '',
        code: '',
    },];
    getTodo = () =>{
        const todo = document.getElementById('addTodo');
    }
    render(){
        const [{ concluded, text, code }] = this.todos;
        return(
            <div className="listTask">
                <div class="tasks" key={code}>
                    <input type="checkbox"></input>
                    <input id="task" type="text" value={text}></input>
                </div>
            </div>
        );
    }
}