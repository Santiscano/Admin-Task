// import React from 'react';
// import './App.css';
// import { TodoWrite } from './componets/TodoWrite';
// import { CreateTodoButton } from './componets/CreateButton.jsx';
// import img from './img/tasklist.png';
// import { TodoCounter } from './componets/TodoCounter.jsx';
// import { TodoSearch } from './componets/TodoSearch.jsx';
// import { TodoList } from './componets/TodoList.jsx';
// import { TodoItem } from './componets/TodoItem.jsx';

// DEJARE ESTO COMO EJEMPLO DE COMO SE HARIA PARA QUITAR EL UI DE LA LOGICA, PERO NO LO QUITARE EN REALIDAD PARA CONSERVAR EL PROCESO DE LOGICA QUE DESARROLLE Y USARLO COMO METODO EDUCATIVO CUANDO NECESITE USAR ESTO COMO REFERENCIA PARA OTRO PROYECTO

// function AppUI() {
//     return (
//         <React.Fragment>
//             <div className="App">
//                 <section className="section section-left" >
//                 <h2>Create New Task</h2>
//                 <h5>Task Name</h5>
//                 <TodoWrite/>
//                 <CreateTodoButton/>
//                 <img src={img} id="img__task"/>
//                 </section>

//                 <section className="section section-right">
//                 <h1>Your Task</h1>
//                 <TodoCounter
//                     total= {totalTodos}
//                     completed ={completedTodos}
//                 />
//                 <TodoSearch 
//                     SearchValue={SearchValue} 
//                     setSearchValue={setSearchValue} 
//                 />
//                 <TodoList>
//                 {/* se cambio de Todos a searchedTodos por la condicional que se creo para definir su valor */}
//                     {searchedTodos.map((todo) => (
//                     <TodoItem 
//                         key={todo.text} 
//                         text={todo.text} 
//                         completed={todo.completed}
//                         // creo una propiedad onComplete que ejecutara con la arrow function  la funcion completeTask que a su vez tomara como argumento la key que es todo.tex .... idealmente despues debe cambiarse esto por una correcta id unica
//                         onComplete ={() => completeTask(todo.text)}
//                         onDelete = {() => deletedTask(todo.text)}
//                     />
//                     ))}
//                 </TodoList>
//                 </section>
//             </div>
//         </React.Fragment>
        
//     )
// }

// export  { AppUI }


// AQUI EN VEZ DE TODO LO QUE ESTA DENTRO DEL <React.Fragment/> seria <AppUI/> y todo lo que sigue acontinuacion
    // <AppUI
    // 
    // total= {totalTodos}
    // completed ={completedTodos}
    // SearchValue, 
    // setSearchValue,
    // searchedTodos,
    // completeTask,
    // deletedTask,

    // />