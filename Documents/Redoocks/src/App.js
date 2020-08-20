import React from 'react';
import UserContextProvider, { useToDo } from './context';
import Add from './Component/Add';
import List from './Component/List';
import Todo from './Component/Todo';
import translation from './translation';
import Screen from './Screen';

function App() {
  const {toDos, completed} = useToDo();
  return (
    <>
    <UserContextProvider defaultLang="en" translation={translation}>
    <Screen />
    </UserContextProvider>,
    <Add />
    <List name={"To Do"}>
      {toDos.length !== 0 &&
      <>
        <h4>{toDos.map(todo => (
         <Todo 
          key={todo.id} 
          id={todo.id} 
          text={todo.text}
           />
        ))}
          
        </h4>
      </>}
    </List>
    {completed.length !==0  &&
    <List name={"Completed"}>
    <>
    <h4>{completed.map(todo =>
      <Todo
        key={todo.id} 
        id={todo.id} 
        text={todo.text}
        isCompleted={true}
      />
    )}
    </h4>
    </>
    </List>
    }
    </>
  )
}

export default App;
