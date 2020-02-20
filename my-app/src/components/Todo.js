import React from 'react';

const Todo = props => {
    return (
        <div
            onClick={() => props.toggleTodo(props.todo.id)}
            className={`todo${props.completed ? ' completed' : ''}`}
            >
                <p>{props.item}</p>
        </div>
    );
};

export default Todo;