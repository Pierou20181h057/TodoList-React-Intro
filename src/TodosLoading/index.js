import React from 'react';
import './TodosLoading.css'
function TodosLoading(){
  
    return(
      <div className='TodoList-loading'>
        <span className="TodoItem-loading">
          <p className='TodoItem-p-loading'></p>
        </span>
      </div>
    );
  }
  
  
  export { TodosLoading };