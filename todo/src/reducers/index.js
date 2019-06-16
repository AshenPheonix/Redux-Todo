import {ADD_TODO,TOGGLE_TODO, REMOVE_TODO, SET_TODOS} from '../actions'

let  initialState={
    todos:[{
        value: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        value: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }]
}

if(localStorage.getItem('todos')){
    initialState={todos:JSON.parse(localStorage.getItem('todos'))}
}

export default (state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            let temp=state.todos.concat(action.payload)
            return {todos:temp}
        case TOGGLE_TODO:
            let temp2=state.todos.map(i=>i.id===action.payload?{...i,completed:!i.completed}:i)
            return {todos:temp2}
        case REMOVE_TODO:
            return {todos:state.todos.filter(todo=>todo.id!==action.payload)}
        case SET_TODOS:
            return {todos:JSON.parse(action.payload)}
        default:
            return state;
    }
}