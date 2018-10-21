import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { setText } from './redux/appState/actions'

class App extends Component {

  handleChange = event => {
    this.props.setText(event.target.value)
  }

  render() {
    return (
      <div className="App">
        <input type="text" value={this.props.text} onChange={this.handleChange} />
      </div>
    );
  }
}

const mapStateToProps = ({appState}) => ({
  text: appState.text
})

const mapDispatchToProps = dispatch => ({
  setText: text => dispatch(setText(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)