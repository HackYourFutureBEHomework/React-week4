import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  render () {

    /*
      map through the todoList array
      each todoItem is rendered as a TodoItem component with these props:
        - key: required when rendering an array
        - index: because TodoItem component will otherwise not know which index its todoItem has. todoList has no id's for its todoItems
        - todoItem: an object with `title (string)`, `deadline (date)`, `createdOn (date)` and  `done (boolean)`

        (look at App.js for the implementation of the following functions:)
        - removeItem: removes the item with the current index
        - setDoneItem: sets the done for a todoItem to true or false
        - setTitle: changes the title for a todoItem,
        - setDeadline: changes the deadline for a todoItem
     */

    return (
      <ul>
        {
          this.props.todoList.map((todoItem, index) => (
            <TodoItem
              key={index}
              index={index}
              todoItem={todoItem}
              removeItem={this.props.removeItem}
              setDoneItem={this.props.setDoneItem}
              setTitle={this.props.setTitle}
              setDeadline={this.props.setDeadline}
            />
          ))
        }
      </ul>
    )
  }
}

export default TodoList