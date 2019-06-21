import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './TodoCopy'

export class TodoList extends Component {

    render() {
        return (
            <ul className="list">
                {this.props.todos.map(todo=>(
                    <Todo 
                        {...todo}
                        key={todo.id}
                    />
                ))}
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    todos:state.todos
})

export default connect(mapStateToProps, {})(TodoList)