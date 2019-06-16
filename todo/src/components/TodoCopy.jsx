import React from 'react'
import {useDispatch} from 'react-redux'
import {toggleTodo, removeTodo} from '../actions'

function Todo(props) {
    const dispatch=useDispatch()
    return (
        <li 
            className="todo"
            onClick={()=>dispatch(toggleTodo(props.id))}
        >
            {props.value}
            <input 
                type="checkbox" 
                name="completed" 
                checked={props.completed}
            />
            <button onClick={()=>dispatch(removeTodo(props.id))}
            >
                Remove This Todo
            </button>
        </li>
    )
}

export default Todo
