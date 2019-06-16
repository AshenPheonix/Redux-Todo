export const ADD_TODO="ADD_TODO"
export const TOGGLE_TODO="TOGGLE_TODO"
export const REMOVE_TODO="REMOVE_TODO"
export const SET_TODOS="SET_TODOS"

export const addTodo=e=>{
    return {type:ADD_TODO,payload:e}
}

export const toggleTodo=e=>{
    return {type:TOGGLE_TODO,payload:e}
}

export const removeTodo=e=>{
    return {type:REMOVE_TODO,payload:e}
}

export const setTodos=e=>{
    return {type:SET_TODOS,payload:e}
}