import React, { Component } from 'react';

class TodoItem extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return (
			<div 
				onClick={this.handleClick} 
			>
				{this.props.content}
				{/*接受父组件的传过来值*/}
			</div>)
	}

	handleClick() {
		this.props.deleteItem(this.props.index)
		//this.props.deleteItem 等价于父组件的 this.handleItemDelete
	}
}

export default TodoItem;