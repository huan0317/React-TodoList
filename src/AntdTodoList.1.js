import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/index.js';
import { initListAciton, getInputChangeAciton, getAddItemAciton, getDeleteItemAciton,} from './store/actionCreators'
import TodoListUI from './TodoListUI';
import axios from 'axios'

// 这份是不使用中间件
//容器组件又叫聪明组件
class AntdTodoList extends Component {
    constructor(props) {
      super(props);
      this.state = store.getState()
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleStoreChange = this.handleStoreChange.bind(this);
      this.handleBtnClick = this.handleBtnClick.bind(this);
      this.handleItemDelete = this.handleItemDelete.bind(this)
      store.subscribe(this.handleStoreChange);//监听订阅store数据的改变
    }

    render() {
      return (
        <TodoListUI
          inputValue = {this.state.inputValue}
          list = {this.state.list}
          handleInputChange = {this.handleInputChange}
          handleBtnClick = {this.handleBtnClick}
          handleItemDelete = {this.handleItemDelete}
        />
      )
    }
  
  componentDidMount() {
    axios.get('/list.json')
        .then((res)=>{
        // console.log(res)
        const data = res.data;
        const action = initListAciton(data)
        store.dispatch(action);
    })
  }
  
  handleInputChange(e) {
    const action = getInputChangeAciton(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = getAddItemAciton();
    store.dispatch(action);
  }
  handleItemDelete(index) {
    const action = getDeleteItemAciton(index);
    store.dispatch(action);
  }

}

export default AntdTodoList;