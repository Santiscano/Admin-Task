import React from 'react';
import './TodoItem.css';

// const validacion = (props) => {
//     if(props.completed){
//         return "checkbox-false"
//     }else{
//         return "checkbox-completed"
//     }
// }



function TodoItem(props) {

            // ya no uso esta funcion porque ahora se creo la funcion correcta en App.js llamada onComplete 
    // const onComplete = () =>{
    //     alert('You Have Finished The Task   ' + props.text);
    // };

    // const onDelete = () =>{
    //     alert('Delete the Task ' + props.text);
    // };

    return (
        <li className= 'listaTodos' >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon-tabler-square" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"
                onClick={props.onComplete}
            >
                <path  stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect  x="1" y="1" width="20" height="20" rx="" />
            </svg>

            <p id='text--todo' className={`${props.completed && 'todoItem--completed'}`}>
                {props.text}
            </p>

            <button className="noSelect"
                onClick={props.onDelete}
            >
                Delete
            </button>
        </li>
    )
}

export {TodoItem};
