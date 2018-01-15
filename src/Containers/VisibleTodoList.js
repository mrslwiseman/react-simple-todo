import {connect} from 'react-redux';
import TodoList from '../Components/TodoList';
import {toggleTodo} from '../Actions'
const getVisibleTodos = (todos, filter) => {
    // 3. filter to dos
    
    switch(filter){
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed)
        case 'SHOW_INCOMPLETED':
            return todos.filter(todo => !todo.completed)
        default:
        throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state) => {
    // 2. all TodoList needs is the relevant todos dep. on visibility, lets filter in getVisibleTodos()
    // this keeps this logic out of TodoList component (which is a dumb component now haha)
    return {
        todos: getVisibleTodos(state.todos, state.visibility)
    }
}

const mapDispatchToProps = {
    onTodoClick: toggleTodo
}

const VisibleTodoList = connect(
    // 1. connect provides the result of mapStateToProps() to the TOdoList props
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList