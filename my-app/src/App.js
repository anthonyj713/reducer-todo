import React, {useReducer} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';
import { todoReducer, initialState } from './reducers/TodoReducer';


function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return(
      <div className='App'>
        <TodoList
          state={state}
          dispatch={dispatch}
          />
          <TodoForm
            state={state}
            dispatch={dispatch}
          />
      </div>
    );
}

export default App;