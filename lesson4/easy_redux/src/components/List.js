import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteItem } from '../redux/appState/actions'

class List extends Component {
    handleClick = (index) => {
        this.props.deleteItem(index)
    }
    render () {
        return (
            <ul>
                {this.props.list.map((listItem, index) => (
                    <li key={index} onClick={() => this.handleClick(index)}>{listItem}</li>
                ))}
            </ul>
        )
    }
}

const mapStateToProps = ({appState}) => ({
    list: appState.list
})

const mapDispatchToProps = dispatch => ({
    deleteItem: index => dispatch(deleteItem(index))
  })

export default connect(mapStateToProps, mapDispatchToProps)(List)