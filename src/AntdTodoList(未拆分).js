import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index.js';
import { getInputChangeAciton, getAddItemAciton, getDeleteItemAciton} from './store/actionCreators'

class AntdTodoList extends Component {
    constructor(props) {
      super(props);
      this.state = store.getState()
      console.log(store.getState());
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleStoreChange = this.handleStoreChange.bind(this);
      this.handleBtnClick = this.handleBtnClick.bind(this);
      store.subscribe(this.handleStoreChange);//监听订阅store数据的改变
    }

    render() {
      return (
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
          <div>
            <Input 
              value={this.state.inputValue}
              placeholder="todo info"
              style={{width: '300px', marginRight: '10px'}}
              onChange={this.handleInputChange}
            />
            <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
          </div>
          <List
            style={{marginTop: '10px', width: '300px'}}
            size="small"
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
          />
        </div>
        
      )
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