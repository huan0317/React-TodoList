import React, { Component, Fragment } from 'react';
import './style.css';

// import { Component } from 'react';
// // 等价于
// import React from 'react'
// const Component = React.Component

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
      <div>
        {/* 这样写注释 */}
        {
          //这样写注释
        }
        <label htmlFor="insertArea">输入内容</label>
        <input
          id="insertArea"
          className="input"
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleBtnClick.bind(this)}>提交</button>
      </div>
      <ul>
        {
          this.state.list.map((item, index) => {
            return (
              <div>
                <li 
                  key={index} 
                  onClick={()=>this.handleItemDelete(index)}
                  dangerouslySetInnerHTML={{__html: item}}
                >
                </li>
              </div>
            )
          })
        }
      </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(index){
    console.log(index)
    const list = [...this.state.list];
    list.splice(index,1);

    this.setState({
      list: list
    })
  }
}

export default TodoList;
