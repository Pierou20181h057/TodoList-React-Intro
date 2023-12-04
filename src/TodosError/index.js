import React from 'react';
import './TodosError.css'
import { ReactComponent as ErrorSVG } from "./error_black_24dp.svg"
function TodosError(){
  
    return(
      <div className='Error-container'>
        <ErrorSVG className="Error-icon" />
        <p className='Error-p'>Se produjo un error</p>
      </div>
      
    );
  }
  
  
  export { TodosError };