import React from 'react';
import { useLocalStorage } from '../TodoContext/useLocalStorage';
import {AppUi} from './AppUI';
import { TodoProvider } from '../TodoContext';



function App() {

  

  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}
 




export default App;
