import React from 'react';
import './TodoWrite.css';
import lapiz from '../img/pencil.svg';

function TodoWrite ({newTodoValue, setNewTodoValue, onSubmit}) {
    // onchange para ejecutar el modificador del valor
    const onChange = (event) => {
        console.log(event.target.value);
        setNewTodoValue(event.target.value)
    }
    
    return (
        <form className="search" >
            <textarea 
                type="text" 
                placeholder='Write Your Task' 
                className="search__textarea" 
                value={newTodoValue} 
                onChange={onChange} 
            />
            <button type="text" className="search__btn" >
                <img className="ri-rearch-2-line" src={ lapiz } alt="imagen lapiz crear nuevo todo"/>
            </button>
        </form>
    )
}

export { TodoWrite };
