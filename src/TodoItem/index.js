import './TodoItem.css'
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoItem(props){
  const{
    darkMode,
  } = React.useContext(TodoContext)
    return (
      <li className={`TodoItem ${darkMode ? 'item-dark' : 'item-light'}`}>
        <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete}
        />
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"} ${darkMode ? 'item-p-dark' : 'item-p-ligth'}`}>{props.text}</p>
        <DeleteIcon 
          onDelete={props.onDelete}
        />
        
      </li>
    );
  }

export {TodoItem};