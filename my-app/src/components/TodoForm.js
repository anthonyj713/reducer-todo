import React, { useState } from 'react';
import { addItem } from '../actions/todoActions';
import { connect } from 'react-redux';
const TodoForm = props => {

    const [state, setState] = useState('');

    const handleChanges = e => {
       setState(e.target.value)
       }
   

   const handleSubmit = e => {
    
       e.preventDefault();
      props.dispatch({type: 'ADD_ITEM', payload: state})
      props.addItem(state)
      console.log(props);
   };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={state}
                name='newTodo'
                id='newTodo'
                onChange={handleChanges}
                />
                <button>Add To Do!</button>
        </form>
        </div>
        );
    }

const mapStateToProps = state => {
    return {
       items: state.todoReducer
    };
}

export default connect(
    mapStateToProps,
        { addItem }

)(TodoForm);