import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addTodo} from '../actions'

class TodoForm extends Component {
    state = {
        todo:''
    }
    
    handleSub=e=>{
        e.preventDefault();
        if(this.state.todo!==''){
            this.props.addTodo({
                value:this.state.todo,
                completed:false,
                id:Math.round(Math.random()*1000000+1)
            })
            this.setState({todo:''})
        }        
    }

    change=e=>{
        this.setState({
            todo:e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSub}>
                <label htmlFor="todo">New Task<input type="text" name="todo" onChange={this.change}/></label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default connect(null, {addTodo})(TodoForm)