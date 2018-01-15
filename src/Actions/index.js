export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodoAction = (text, id, completed) => {
    // returns an action
    return {
        type: ADD_TODO,
        payload: {
            text,
            id: Date.now(),
            completed: false
        }
    }
}



export const updateVisibility = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

export const toggleTodo = (id) => {
    console.log({ 'action': id });

    return {
        type: TOGGLE_TODO,
        id
}
}