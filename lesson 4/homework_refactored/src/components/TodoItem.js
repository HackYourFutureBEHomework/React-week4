import React, { Component } from 'react'
import Moment from 'react-moment'
import DatePicker from 'react-date-picker'

class TodoItem extends Component {

  constructor (props) {
    super(props)
    /*
      Each TodoItem component has its own internal state, which has very little to do (pun not intended) with the todoList state in App.js
      - editingTitle: true when the user is editing this todoItem's title
      - title: initializes to the todoItem's original title, this is the value of the input element when the user is editing the title
     */
    this.state = {
      editingTitle: false,
      title: this.props.todoItem.title
    }
  }

  startEditingTitle = () => {
    /*
      changes editingTitle in this component's internal state.
      when true: it shows in input field with state.title as the value
      when false: it shows a span with props.todoItem.title
     */
    this.setState({
      editingTitle: true
    })
  }

  handleChangeTitle = event => {
    /*
      changes the value of the input field when editing a todoItem's title
     */
    const title = event.target.value
    this.setState({title})
  }

  stopEditingTitle = event => {
    /*
      because this is actually a submit event handler, we need to prevent the default behaviour of refreshing the page when submitting
     */
    event.preventDefault()

    /*
      stop editing the title, so hide the input field, and show the title as normal text again
     */
    this.setState({
      editingTitle: false
    })

    /*
      setTitle is a function defined in App.js, but it has been passed down to TodoList.js and then to this component.
      (using redux would have been useful here!)
      We call this function with as parameters the current todoItem index, and the modified title
     */
    this.props.setTitle(this.props.index, this.state.title)
  }

  render () {
    /*
      this is a shorter way of writing the following:
        const todoItem = this.props.todoItem
        const index = this.props.index
    */
    const {todoItem, index} = this.props

    return (
      <li style={{textDecoration: todoItem.done ? 'line-through' : 'inherit'}}>
        {/*
          if the current todoItem has `done=true`, it will show a line-through on all the child elements of <li>
        */}


        {/*
          this input (checkbox) is a controlled component, it will be checked/unchecked depending on todoItem.done
          changing it will call setDoneItem as defined in App.js. When App.js's state changes, it will trickle down
          to this component and also change the checked/unchecked value of this input element
        */}
        <input
          onChange={event => this.props.setDoneItem(event, index)}
          checked={todoItem.done}
          type="checkbox"
        />

        {
          /*
            If the editingTitle value of this component's internal state is true, it will show a form with a controlled component
            which will change this component's `title` state. When `title` updates, ONLY the content of this input will change
            The actual title of this todoItem will only change AFTER submitting this form! look at the stopEditingTitle function in this
            component. It is the submit event handler of the form you see here.

            When editingTitle is false, it will just show a span with the current todoItem's title.
            Clicking this span will set editingTitle to true, and allow editing the title.
          */
          this.state.editingTitle ? (
            <form onSubmit={this.stopEditingTitle}
                  className='edit-title-form'>
              <input type='text' value={this.state.title} onChange={this.handleChangeTitle}/>
            </form>
          ) : (
            <span onClick={this.startEditingTitle}>{todoItem.title}</span>
          )
        }

        it was posted on

        {/*
          this displays the todoItem's creation date, and can not be changed.
        */}
        <Moment format="YYYY/MM/DD">{todoItem.createdOn}</Moment>

        {/*
          this button's onClick event will call the removeItem with the current index. Look at App.js for the implementation.
          Clicking this button removes the current todoItem from the state in App.js
        */}
        <button onClick={() => this.props.removeItem(index)}>Remove</button>

        <span>
          Deadline:

          {/*
            DatePicker is a controlled component. Its value is derived from the state in App.js
            Changing the date here will also change the state in App.js, using the setDeadline function which we wrote in App.js
          */}
          <DatePicker
            value={todoItem.deadline}
            onChange={deadline => this.props.setDeadline(index, deadline)}
          />
        </span>
      </li>
    )
  }
}

export default TodoItem