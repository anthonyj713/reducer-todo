import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/TodoReducer';
import Todo from './Todo';


const TodoList = (props) => {
  

    return (
        <div>
            {props.state.items.map(i => 
                <Todo
                    item = {i.item}
                    completed = {i.completed}
                    id = {i.id}
                    dispatch = {props.dispatch}
                />
            )}
        </div>
    )
}

export default TodoList;