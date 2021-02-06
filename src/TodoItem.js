import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.deleteFunction(this.props.index)
  }

  render() {
    return <li onClick={this.handleClick}>{this.props.content}</li>
  }
}

export default TodoItem;
