import { TodoContext } from '../TodoContext';
import './TodoCounter.css'
import React from 'react';

function TodoCount(){
  const {
    completedTodos: completed,
    totalTodos: total,
    darkMode,
  } = React.useContext(TodoContext);
    return(
      <h1 className={`TodoCounter ${darkMode ? 'TodoCounter-dark' : 'TodoCounter-ligth'}`}>
        Completaste <span>{completed}</span> de <span>{total}</span> TODOs
      </h1>
    );
  }
  
  
  export {TodoCount};

  /*
  const estilos = {
  fontSize: '24px',
  textAlign: 'center',
  margin: 0,
  padding: '48px'
}


  function TodoCount(prop){
    return(
      <h1 style = {estilos}>
        Completaste {prop.completed} de {prop.total} TODOs
      </h1>
    );
  }
  
  
export {TodoCount};*/