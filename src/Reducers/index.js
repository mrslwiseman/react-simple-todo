import {combineReducers} from 'redux'
// const initialState = {
//     todos: [],
//     visibility: 'SHOW_ALL'
// }

//
const todos = (todos = [], action) => {
    // if state is undefined, init it with []
    switch(action.type){
        case 'ADD_TODO':
            return [
                // spread curent states todos
                ...todos,
                // clip this on the end
                {
                    ...action.payload
                } 
            ]
        case 'TOGGLE_TODO':
        // return new [todos]
            return todos.map(todo => {
                if(todo.id === action.id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            
        default:
            return todos
    }
}

const visibility = (visibleState = 'SHOW_ALL', action) => {

    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
        // sets state.visibility to be whatever value was passed up to the action. ie 'SHOW_ALL'
            return action.filter
        default:
            return visibleState
    }
}

// WITHOUT combineReducers():

// const todoApp = (state = initialState, action) => { 
//     return {
//         todos: todos(state.todos, action),
//         visibility: visibility(state.visibility, action)
//     }
// }

// 1. each function name provided here represents a state object
// function will run and return state in reponse to the action that was passed.
const todoApp = combineReducers({
    todos, // todos(todosStateObject, action)
    visibility // visibility(VisiblitystateObject, action)
})

export default todoApp;