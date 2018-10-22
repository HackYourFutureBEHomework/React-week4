import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addItem } from './redux/appState/actions'
import List from './components/List'

class App extends Component {

  handleSubmit = event => {
    event.preventDefault()
    const item = this.inputElementRef.value
    this.props.addItem(item)
    this.inputElementRef.value = ''
  }


  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={inputElement => this.inputElementRef = inputElement }
          />
        </form>

        <List />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(App)