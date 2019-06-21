import React, { Component } from 'react'
import { connect } from 'react-redux'
import {toggleTodo} from '../actions'

class Todo extends Component {
    render() {
        return (
            <li className="todo" onClick={()=>this.props.toggleTodo(this.props.id)}>
                {this.props.value}
                <input type="checkbox" name="completed" checked={this.props.completed}/>
            </li>
        )
    }
}

export default connect(null, {toggleTodo})(Todo)