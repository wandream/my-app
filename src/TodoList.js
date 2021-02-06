import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickItem = this.handleClickItem.bind(this)

    this.state = {
      inputValue: '',
      list: []
    }
  }
    handleKeyUp (e) {
      if(e.target.value && e.keyCode === 13) {
        const list = [...this.state.list];
        list.push(this.state.inputValue)
        this.setState ({
          list,
          inputValue:''
        })
      }
    }

    handleInputChange(e) {
        this.setState({ 
          inputValue: e.target.value
        })
    }

    handleClickItem(index) {
      const list = [...this.state.list];
      list.splice(index,1)
      console.log(list);
      this.setState({
        list
      })
    }


    getItems() {
      return this.state.list.map((value, index) => {
          return <TodoItem
          content={value} 
          index={index}
          key={index}
          deleteFunction = {this.handleClickItem}
          />
        }
      )
    }

  render() {
    return (
      <Fragment>  
      <div>
        <label htmlFor='input'>请输入内容:</label>
        <input
          id='input'
          value = {this.state.inputValue}
          onChange = {this.handleInputChange}
          onKeyUp = {this.handleKeyUp}
        />
        <ul>
          {this.getItems()}
        </ul>
      </div>
      </Fragment>
    )
  }
}

export default TodoList