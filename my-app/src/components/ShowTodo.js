import { connect } from 'react-redux';
import { toggleTodo, Visibility  } from '../actions/todoActions';
import TodoList from './TodoList';

const showTodos = (todos, filter) => {
    switch (filter) {
        case Visibility.SHOW_ALL:
            return todos
        case Visibility.SHOW_COMPLETED:
            return todos.filter(i => i.completed)
        case Visibility.SHOW_ACTIVE:
            return todos.filter(i => !i.completed)
        default: return state
    }
}

const mapStateToProps = state => ({
    todos: showTodos(state.todos, state.visibility)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)