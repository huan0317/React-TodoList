import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

	constructor(props) {
		super(props); //class方法中，继承是使用 extends 关键字来实现的。子类 必须 在 constructor( )调用 super( )方法，否则新建实例时会报错。
		//报错的原因是：子类是没有自己的 this 对象的，它只能继承自父类的 this 对象，然后对其进行加工，而super( )就是将父类中的this对象继承给子类的。没有 super，子类就得不到 this 对象。
		this.handleClick = this.handleClick.bind(this);
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps.content !==this.props.content) {
			return true;
		}else {
			return false;
		}
	}

	render() {
		// JSX -> createElement -> 虚拟DOM(JS对象) -> 真实的DOM
		// return React.createElement('div', {}, 'item')等于<div>item</div>
		const { content } = this.props;
		return (
			<div 
				onClick={this.handleClick} 
			>
				{content}
			</div>
			)
	}

	handleClick() {
		const { deleteItem, index } = this.props;
		deleteItem(index);
	}
}

// 对组件传值类型做校验
//isRequired必须要传递
//oneOfType 其一
TodoItem.propTypes = {
	content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	deleteItem: PropTypes.func,
	index: PropTypes.number
}
//没有接收到参数做默认值
TodoItem.defaultProps = {
	content: 'hello world'
}
export default TodoItem;