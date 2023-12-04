import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider({children}){
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1',[]);
    
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      const [darkMode, setDarkMode] = React.useState(false);

    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      // es necesario !! por si existe algun valor, si es string y tiene valor lo convierte en true
      const totalTodos = todos.length;
    
     
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLocaleLowerCase();
          return todoText.includes(searchText);
        }
      );
    
    
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos[todoIndex].completed =! newTodos[todoIndex].completed;
        saveTodos(newTodos);
      }
      
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }
      const addTodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false
        });
        saveTodos(newTodos);

      }
      const change = () =>{
        setDarkMode(!darkMode);
      }
      
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            change,
            addTodo,
            darkMode,
            setDarkMode,
        }}>
            {children}
        </TodoContext.Provider>
    );
}


export {TodoContext, TodoProvider};