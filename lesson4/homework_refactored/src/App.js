import React, { Component } from 'react'
import './App.css'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import Header from './components/Header'
import Newtodo from './components/Newtodo'
import TodoList from './components/TodoList'

class App extends Component {
  constructor () {
    super()
    this.state = {

      /*
      App is the top level component, so this is where we keep our todoList state
       */

      todoList: [
        {
          title: 'Get out of bed',
          createdOn: new Date(),
          deadline: new Date(),
          done: false
        },
        {
          title: 'Brush teeth',
          createdOn: new Date(),
          deadline: new Date(),
          done: false
        },
        {
          title: 'Eat breakfast',
          createdOn: new Date(),
          deadline: new Date(),
          done: false
        }
      ]
    }
  }

  addTodoItem = todoItem => {
    /*
    The function to add a todoItem is in the same component as where we keep the state
    We pass this function down to the child components
     */
    const todoList = [...this.state.todoList, todoItem]
    this.setState({todoList})
  }

  removeItem = (index) => {
    /*
    The function to remove a todoItem is in the same component as where we keep the state
    We pass this function down to the child components
     */
    const todoList = [...this.state.todoList]
    todoList.splice(index, 1)
    this.setState({
      todoList
    })
  }

  setDoneItem = (event, index) => {
    /*
    The function to change a todoItem's done/not-done is in the same component as where we keep the state
    We pass this function down to the child components
     */
    const todoList = [...this.state.todoList]
    todoList[index] = {...todoList[index]}
    todoList[index].done = event.target.checked
    this.setState({
      todoList
    })
  }

  setTitle = (index, title) => {
    /*
    The function to change a todoItem's title is in the same component as where we keep the state
    We pass this function down to the child components
     */
    const todoList = [...this.state.todoList]
    todoList[index] = {...todoList[index]}
    todoList[index].title = title
    this.setState({
      todoList
    })
  }

  setDeadline = (index, deadline) => {
    /*
    The function to change a todoItem's deadline is in the same component as where we keep the state
    We pass this function down to the child components
     */
    const todoList = [...this.state.todoList]
    todoList[index] = {...todoList[index]}
    todoList[index].deadline = deadline
    this.setState({
      todoList
    })
  }

  render () {
    /*
    - Header is a very simple component which just returns pure HTML
    - NewTodo is a component which will add todoItems to this component's state. It receives the addTodoItem function as a prop
    - TodoList is a component which will display all the todoItems in this component's state. It reveices the todoList as a prop,
      as well as several functions to remove, add, and change (done, title, deadline) a single todoItem
     */
    return (
      <div>
        <Header/>
        <Newtodo addTodoItem={this.addTodoItem}/>
        <TodoList
          todoList={this.state.todoList}
          removeItem={this.removeItem}
          setDoneItem={this.setDoneItem}
          setTitle={this.setTitle}
          setDeadline={this.setDeadline}
        />
      </div>
    )
  }
}

export default App
