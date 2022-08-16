import React from 'react';
import './CreateButton.css';



function CreateTodoButton({onSubmit}) {

    // const onSubmit = (msg) => {
        
    // }

    // const onClickButton = (msg) =>{
    //     alert('You Have Create a New Task')
    // }

    return (
        <form onSubmit={onSubmit} >
            <button className="learn-more" id="createTask" type="submit" >
                <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">
                    Create Task
                </span>
            </button>
        </form>
    )
}

export  {CreateTodoButton};



