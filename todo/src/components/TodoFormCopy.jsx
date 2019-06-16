import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../actions'

function TodoForm(props) {

    const [task,setTask]=useState('')
    const dispatch=useDispatch()

    const handleSub=e=>{
        e.preventDefault()
        if(task!==''){
            dispatch(addTodo({
                value:task,
                completed:false,
                id:Math.round(Math.random()*10000000+1)
            }))
            setTask('')
        }
    }

    return(
        <form onSubmit={handleSub}>
            <label htmlFor="todo">New Task
                <input 
                    type="text" 
                    name="todo" 
                    onChange={e=>setTask(e.target.value)}
                    value={task}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default TodoForm
