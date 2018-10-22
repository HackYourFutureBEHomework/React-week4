import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    /*
     this loading state is just for show, it doesn't actually load anything
     */
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {
    return (
      <div>
        <h1 className="title">todo app</h1>
        <p className="loader">{this.state.loading ? "loading todos" : ""}</p>
      </div>
    );
  }
}

export default Header;
