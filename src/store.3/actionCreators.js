import { GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'

//使用的是redux-sage做中间件
export const getInputChangeAciton = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAciton = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAciton = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getInitList = () => ({
    type: GET_INIT_LIST
})