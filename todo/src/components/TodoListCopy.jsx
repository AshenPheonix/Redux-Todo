import React,{useEffect} from 'react'
import Todo from './TodoCopy'
import {useSelector} from 'react-redux'

function TodoList(props) {

    const todos=useSelector(state=>state.todos)

    useEffect(()=>{
        if(localStorage.getItem('todos') && JSON.parse(localStorage.getItem('todos') !== todos)){
            localStorage.setItem('todos',JSON.stringify(todos))
        }
    })

    return (
        <ul className="list">
            {todos.map(todo=>(
                <Todo
                    key={todo.id}
                    {...todo}
                />
            ))}
        </ul>
    )
}

export default TodoList
