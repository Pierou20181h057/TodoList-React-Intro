import { TodoCount } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import {TodoForm} from '../TodoForm';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { PersonalInformation } from '../PersonalInformation';
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import {EmptyTodos} from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';
import './AppUI.css'
function AppUi() {
  const{
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    darkMode,
  } = React.useContext(TodoContext)
    return (
        <>
          <div className={`fondo  ${darkMode ? 'background-dark' : 'background-light'}`} >
            {/* puedes eliminar React.fragment */}
            <PersonalInformation/>
            <TodoCount />
            <TodoSearch

            />
            <TodoList>
                {loading && (
                  <>
                    <TodosLoading/>
                    <TodosLoading/>
                    <TodosLoading/>
                  </>
                )}
                {error && <TodosError/>}
                {!loading && searchedTodos.length === 0 && <EmptyTodos/>}
                
                {searchedTodos.map(todo =>(
                  <TodoItem 
                  key={todo.text} 
                  text={todo.text} 
                  completed = {todo.completed}
                  onComplete = {() => completeTodo(todo.text)}
                  onDelete = {() => deleteTodo(todo.text)}
                  />
                ))}

                
              </TodoList>
                
                
            <CreateTodoButton/>
            {openModal && (
              <Modal>
                <TodoForm/>
              </Modal>
            )}
          </div>
        </>
      );
}
export {AppUi};