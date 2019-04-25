import React from 'react';
import { Input, Button, List } from 'antd';

//无状态组件（只要一个render函数）
const TodoListUI = (props)=> {
  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <div>
        <Input 
        value={props.inputValue}
        placeholder="todo info"
        style={{width: '300px', marginRight: '10px'}}
        onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </div>
      <List
        style={{marginTop: '10px', width: '300px'}}
        size="small"
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
      />
  </div>
  )
}

//UI组件又叫傻瓜组件
// class TodoListUI extends Component {
//     render() {
      // return (
      //   <div style={{marginTop: '10px', marginLeft: '10px'}}>
      //     <div>
      //       <Input 
      //       value={this.props.inputValue}
      //       placeholder="todo info"
      //       style={{width: '300px', marginRight: '10px'}}
      //       onChange={this.props.handleInputChange}
      //       />
      //       <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
      //     </div>
      //     <List
      //       style={{marginTop: '10px', width: '300px'}}
      //       size="small"
      //       bordered
      //       dataSource={this.props.list}
      //       renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
      //     />
      // </div>
      // )
//     }
// }

export default TodoListUI;