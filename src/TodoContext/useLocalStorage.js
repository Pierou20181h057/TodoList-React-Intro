import React from "react";
function useLocalStorage(itemName, initialValue){

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          const localStorageTodos = localStorage.getItem(itemName);
          let parsedTodos;
  
          if(!localStorageTodos){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedTodos= [];
          }else{
            parsedTodos= JSON.parse(localStorageTodos);
            setItem(parsedTodos);
          }
          setLoading(false);
        }catch(error){
          setLoading(false);
          setError(true);
        }
      }, 2000);
    }, []
    );
    
  
    
  
    const saveItem = (newItem) =>{
      localStorage.setItem(itemName, JSON.stringify(newItem));
  
      setItem(newItem);
    };
    return {
      item, 
      saveItem, 
      loading, 
      error,
    };
  }
  

export { useLocalStorage }

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Tomar el curso de intro a react.js', completed: false},
//   { text: 'Llorar con la llorana', completed: true},
//   { text: 'LALALALA', completed: false},

// ];
// localStorage.setItem('TODOS_V1', defaultTodos);
// localStorage.removeItem('TODOS_V1');