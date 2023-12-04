import React from 'react';
import './EmptyTodos.css'
function EmptyTodos(){
  
    return(
      <div className='Empty-container'>
        <p className='Empty-icon'>📝</p>
        <p className='Empty-p'>No tienes TODOS creados</p>
      </div>
    );
  }
  
  
  export { EmptyTodos };