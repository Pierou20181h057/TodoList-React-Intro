import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css'
function CreateTodoButton(){
  const{
    setOpenModal,
    darkMode,
  } = React.useContext(TodoContext);
    return(
      <button className={`CreateTodoButton ${darkMode? 'TodoButton-black' : 'TodoButton-light' }`}
      onClick={()=>{
        setOpenModal(state => !state)
      }}
      >+</button>
    );
  }
  
  
  export {CreateTodoButton};