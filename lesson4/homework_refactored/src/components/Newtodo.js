import React, { Component } from 'react'
import DatePicker from 'react-date-picker'

class Newtodo extends Component {
  constructor () {
    super()
    /*
      this component's state does NOT keep a list of todoItems. App.js will handle that.
      The state you see here are the current title and deadline values for the add-new-todo form
     */
    this.state = {
      title: '',
      deadline: null
    }
  }

  handleSubmit = e => {
    /*
      preventDefault behaviour on the submit event, to prevent the page from reloading.
     */
    e.preventDefault()

    /*
      create a new todoItem object, taking values for title and deadline from this component's state
      We also add `done=false` and `createdOn: new Date()`, which will be the values for all new todoItems.
     */
    const todoItem = {
      title: this.state.title,
      deadline: this.state.deadline,
      done: false,
      createdOn: new Date()
    }

    /*
      reset this component's state, so the form is cleared
     */
    this.setState({
      title: '',
      deadline: null
    })

    /*
    call the addTodoItem function that was passed as a prop to this component, with the todoItem we just created as the parameter.
     */
    this.props.addTodoItem(todoItem)
  }

  handleChangeTitle = e => {
    /*
      changes the current state for the title field for new todoItems
     */
    this.setState({title: e.target.value})
  }

  handleChangeDeadLine = deadline => {
    /*
      changes the current state for the datePicker for new todoItems
     */
    this.setState({deadline})
  }

  render () {

    /*
      - the form element: has an onSubmit attribute. This function will be called when <button> is clicked,
        or when the user presses the Enter key while the focus is inside this form

      - input element:
          - onChange: changes this component's state to the current value
          - value: combined with onChange, this becomes a controlled component, where the value is always derived from the state
          - required: the surrounding form will not submit when this input field is empty. The browser will indicate that it is required

      - DatePicker:
          - onChange/value: this combinated makes it a controlled component, the value is always derived from the state
          - required, it needs a valid date or the form will not submit

      - button: It does not need a type or a click event handler, the default behaviour of a button inside a form is to submit the form
     */

    return (
      <div>
        <form onSubmit={this.handleSubmit} className='new-todo-form'>
          <input
            onChange={this.handleChangeTitle}
            type="text"
            placeholder="Enter todo"
            value={this.state.title}
            required
          />

          <DatePicker
            className="date"
            onChange={this.handleChangeDeadLine}
            value={this.state.deadline}
            required
          />

          <button>add todo</button>
        </form>
      </div>
    )
  }
}

export default Newtodo
