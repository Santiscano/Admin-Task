import React from 'react';
import { useState, useEffect} from 'react';
import './App.css';
import { TodoWrite } from './componets/TodoWrite';
import { CreateTodoButton } from './componets/CreateButton.jsx';
import img from './img/tasklist.png';
import { TodoCounter } from './componets/TodoCounter.jsx';
import { TodoSearch } from './componets/TodoSearch.jsx';
import { TodoList } from './componets/TodoList.jsx';
import { TodoItem } from './componets/TodoItem.jsx';
// import { Modal } fron './componets/Modal.jsx';


// const defaulTodos = [
//   {text:"cortar cebolla", completed: false},
//   {text:"curso de react", completed: false},
//   {text:"llorar ", completed: false},
//   {text:"llorar con la llorona ", completed: false},
//   {text:"llorar con la llorona en caso de ", completed: false},
//   {text:"llorar con la llorona en caso de que n encuentre a su hijo", completed: false},
// ];


// function useLocalStorage(itemName, initialValue){
  
//   const dateLocalStorageItem = localStorage.getItem(itemName);
//   let dateUserItem;


//   if(!dateLocalStorageItem){
//     localStorage.setItem(itemName, initialValue );
//     dateUserItem = [];
//   }else{
//     dateUserItem = JSON.parse(dateLocalStorageItem);
//   }
//   const [item, setItem] = useState(dateUserItem);


//   const saveToLocal = (newListTask) => {
//     const stringifiedTask = JSON.stringify(newListTask);
//     localStorage.setItem( itemName, stringifiedTask );
//     setItem(newListTask);
//   };
//   return [
//     item,
//     saveToLocal
//   ];
// }



function App() {

      // debo arreglarlo para pasar el localStorage a una funcion individual como arriba, pero bien hecho!
  // const [todosLocal, savetodosLocal ]= useLocalStorage ('local_V1', []);
  // A FUTURO INTENTAR CREAR UN USEEFFECT CON UN TIMEOUT
  
                                  // A- almacenar en localStorage
  // creo variable para guardar lo que me entrega la V1 del localStorage
  const dateLocalStorage = localStorage.getItem('local_v1');
  // el valor de esta variable dependera de si tiene info guardada o no en el localStorage
  let dateUser;

  // creo un condicional que si esta vacio mostrara un array vacio si tiene info la entregara
  if(!dateLocalStorage){
    // si esta vacio entonces envio informacion al localstorage con nombre local_v1 y el texto es un array vacio
    localStorage.setItem('local_v1', '[]' );
    // y defino mi dataUser con valor de un array vacio
    dateUser = [];
  }else{
    // pero si tiene informacion entonces la variable dataUser = a lo que entregue la variable de arriba dateLocalStorage que es donde se almacena la primer peticion.
    dateUser = JSON.parse(dateLocalStorage);
  }


                            // B- Funcion intermedia para guardar "persistir" info en localStorage 
  // crear nueva funcion intermedia para almacenar la info de eliminados y agregados en el local storage 
  // como parametro recibimos la lista actualizada que genera create y delete
  const saveToLocal = (newListTask) => {
    // 1- convertimos en strings todos las tareas editadas y las guardamos en una variable
    const stringifiedTask = JSON.stringify(newListTask);
    // 2- guardamos la variable que contiene las task en el localStorage
    localStorage.setItem('local_v1', stringifiedTask );
    // 3- modificamos el estado "hook"
    setTodos(newListTask);
  };




                          // 1- crear estados

  // paso los default Todos a la constante Todos, para despues crearlas ahi y editar con setTodos.
  // cambio el defaulTodos por dateUser porque ya no usare el array predeterminado.
  const [Todos, setTodos] = useState(dateUser);
  // este estado es el que muestra lo que hay en el input
  const [SearchValue, setSearchValue] = useState('');

                          // 2- contar cantidad de Task y cuantas completadas
        // medir el todoCounter
  // toma la lista de todos y filtra los que estan con la propiedad completed en true"!!"
  const completedTodos = Todos.filter(todo => !!todo.completed).length;
  // mide la cantidad de todos que hay en el array
  const totalTodos = Todos.length;

                          // 3- crear filtro para buscar todos
  // array vacio que se llenara conforme a la condicion "si esta vacio mostrara todos""si tiene 1 letra filtrara"
  let searchedTodos = [];

  // negacion de ser igual o mayor a 1, es decir si esta vacio 
  if(!SearchValue.length >= 1){
    // Entonces el array sera igual a "Todos"
    searchedTodos = Todos
  }else{
        // 1-mostrar filtradas
    searchedTodos = Todos.filter((todo) => {
      // 2- asignar todo a minusculas y que el texto de cada "Todo" se asigne a la variable taskText
      const taskText = todo.text.toLowerCase();
      // 3-el valor de cada searchValue se asignara a la variable searchText en minuscula
      const searchText = SearchValue.toLowerCase();
      // 4-filtar si existe la lectura seria ="dentro de la lista de Todos convertido a minuscula esta incluido lo escrito en searchValue convertido en minuscola ?"
      return taskText.includes(searchText);
    })
  }

                          // 4- Completar Task
  // la funcion sera la que ejecute el completar task y como parametro se le dara un id que lo identifique de los demas todos
  const completeTask = (text) =>{
    // Leer alrevez la funcion: el text recibido como parametro se comparara si es extricta/ igual a la propiedad text de cada defaultTodo, y cuando encuentre tomar el indice de ese todo y asignarlo a la variable taskIndex
    const taskIndex = Todos.findIndex( todo => todo.text === text);
    // se crea una nueva lista de task porque eso es lo que realmente sera la actualizacion del estado, una nueva lista con los que NO se eliminaron
    const newListTask = [...Todos];
    // encerrare el "newListTask" en una condicion para tambien desactivar el true a false.
    const transform = () => {
      if(!newListTask[taskIndex].completed){
    // del estado Todos el indice y la propiedad completed convertir en verdadero
      return newListTask[taskIndex].completed = true;
    }else{
      return newListTask[taskIndex].completed = false;
    };}
    // agrego el resultado de la funcion anterior a el indice de la nueva lista para ejecutar el setTodos "hook del estado completed"
    newListTask[taskIndex].completed = transform();
    // y lo mas importante de todo! actualizar el estado
    // remplazo esto
    // setTodos(newListTask);
    // por esta nueva funcion ya que es la intermediaria
    saveToLocal(newListTask);
  }

                          // 5- eliminar Task
  const deletedTask = (text) => {
    const taskIndex = Todos.findIndex( todo => todo.text === text);
    const newListTask = [...Todos];
    // el metodo splice elimina pidiendo 2 parametros = 1-desde donde se eliminara 2-cuantos elementos
    newListTask.splice(taskIndex, 1);
    // setTodos(newListTask);
    saveToLocal(newListTask);
  }

                          // 6- crear Task
  // esta es la funcion que almacena
const createTask = (text) => {
  const newListTask = [...Todos];
  // el metodo push agregara el nuevo todo
  newListTask.push({
    text: text,
    completed: false,
  });
  // setTodos(newListTask);
  saveToLocal(newListTask);
}
  // condiciones para la carga en espera o errores
  let loading;
  let error;



  // 1- conectar el TodoWrite con el CreateTodoButton para que cuando se de click en createtodobutton el value de todowrite se almacene en localstorage
  // la solucion fue..... 
  // A. crear un estado inicial vacio llamado newTodoValue
  // B. crear un modificador de estado que se llamo setNewTodoValue
  // C. asignar el valor y el modificador al tex-area
  // D. al el componente de crea el onclick que ejecutara la funcion onCreate
  // E. la funcion onCreate ejecutara la funcion createTask y recibira como argumento el valor de newTodoValue

  // useState para crear los nuevos valores en el text-area
  const [newTodoValue, setNewTodoValue] = useState('');
  

  return (
    <React.Fragment>
            <div className="App">
                <section className="section section-left" >
                  <h2>Create New Task</h2>
                  <h5>Task Name</h5>
                  <TodoWrite
                    key={newTodoValue.text} 
                    newTodoValue={newTodoValue}
                    setNewTodoValue={setNewTodoValue}
                  />
                  <CreateTodoButton
                    onSubmit = {() => createTask(newTodoValue)}
                  />
                  <img src={img} id="img__task"/>
                </section>

                <section className="section section-right">
                  <h1>Your Task</h1>
                  <TodoCounter
                      total= {totalTodos}
                      completed ={completedTodos}
                  />
                  <TodoSearch 
                      SearchValue={SearchValue} 
                      setSearchValue={setSearchValue} 
                  />
                  <TodoList>
                  {loading && <p>loading now</p>}
                  {error && <p> catastrophic error</p>} 
                  {(!loading && !searchedTodos.length) && <CreateTodoButton/>}
                  {/* se cambio de Todos a searchedTodos por la condicional que se creo para definir su valor */}
                      {searchedTodos.map((todo) => (
                      <TodoItem 
                          key={todo.text} 
                          text={todo.text} 
                          completed={todo.completed}
                          // creo una propiedad onComplete que ejecutara con la arrow function  la funcion completeTask que a su vez tomara como argumento la key que es todo.tex .... idealmente despues debe cambiarse esto por una correcta id unica
                          onComplete ={() => completeTask(todo.text)}
                          onDelete = {() => deletedTask(todo.text)}
                      />
                      ))}
                  </TodoList>
                </section>
            </div>
        </React.Fragment>
  );
}

export default App;
