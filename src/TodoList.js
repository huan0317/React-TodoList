import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios'
import './style.css';

//先引入组件在引入样式会比较好
// import { Component } from 'react';
// // 等价于
// import React from 'react'
// const Component = React.Component

class TodoList extends Component {

  constructor(props) {
    super(props);
    //当组件的state或者props发生改变的时候，render函数就会被重新执行
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  render() {
    return (
      <Fragment>
      <div>
        {/* 
        对第二版的代码优化
        <Fragment>空的占位符
        单项数据流的概念子组件不能直接修改父组件的值
        */
        }
        {
          //这样写注释
        }
        <label htmlFor="insertArea">输入内容</label>
        <input
          id="insertArea"
          className="input"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          ref={(zinput) => {this.input = zinput}}
        />
        <button onClick={this.handleBtnClick}>提交</button>
      </div>
      <ul ref={(ul) => {this.ul = ul}}>
        {this.getTodoItem()}
      </ul>
      </Fragment>
    )
  }

  componentDidMount() {
    axios.get('/api/todolist')
    .then((res)=>{
      console.log(res)
    })
    .catch(()=>{
      console.log('请求失败')
    })
  }

  getTodoItem() {
    //如果JSX中包含逻辑那就可以拆分成函数return 出去然后进行调用
    return this.state.list.map((item, index) => {
      return (
          <TodoItem
            key={index}
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
      )
    })
  }

  handleInputChange(e) {
    //传入函数的方法是异步的所以要先保存
    //可使用ref获取DOM(但是不推荐) 来代替e.target = this.zinput
    const value = e.target.value
    this.setState(() => ({
        inputValue: value
    }))
    //es6()可以等于return
    //上面代码优化前
    //this.setState(() => {
    //return {
    // inputValue: e.targrt.value
    //}
    //})

    //16版本以前是传入对象更新后推荐传入方法
    // this.setState({
    // inputValue: e.target.value
    // })
  }

  handleBtnClick() {
    //setState可以接收一个参数prevState你修改数据之前的值 
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }),() => {
      console.log(this.ul.querySelectorAll('div').length);
    });
  }

  handleItemDelete(index){
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index,1);
      return {list}
    })
  }
}

export default TodoList;
