import {connect} from 'react-redux';
import TodoList from '../Components/TodoList';
import {toggleTodo} from '../Actions'

// determines which todos should be passed down to TodoList.
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

// pass down todos via props to the TodoList component
const mapStateToProps = (state) => {
    // 2. all TodoList needs is the relevant todos dep. on visibility, lets filter in getVisibleTodos()
    // this keeps this logic out of TodoList component (which is a dumb component now haha)
    return {
        todos: getVisibleTodos(state.todos, state.visibility)
    }
}

// pass onTodoClick down via props. 
// functino passed will be wrapped in dispatch() so it'll create an action.
const mapDispatchToProps = {
    // onTodoClick: dispatch(toggleTodo)
    onTodoClick: toggleTodo
}

const VisibleTodoList = connect(
    // 1. connect provides the result of mapStateToProps() to the TOdoList props
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList