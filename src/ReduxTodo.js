import React, { Component } from 'react';
import { connect } from 'react-redux';
// 使用react-redux

const  ReduxTodo = (props) => {
    const { inputValue, list, changeInputValue, handleClick, handleDelete } = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue}/>
                <button onClick={handleClick}>
                    提交
                </button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li onClick={handleDelete.bind(this, index)} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}


//映射到props 
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// store.dispatch, props
// 把store.dispatch 挂载到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            console.log(e.target.value)
            dispatch(action)
        },

        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        },

        handleDelete(index) {
            const action = {
                type: 'delete_item',
                index
            }
            dispatch(action)
        }
    }
}

// 让ReduxTodo这个组件和store进行连接（connect）
export default connect(mapStateToProps, mapDispatchToProps)(ReduxTodo);