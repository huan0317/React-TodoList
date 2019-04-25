import React from 'react';
import ReactDOM from 'react-dom';
import ReduxTodo from './ReduxTodo';
// import AntdTodoList from './AntdTodoList';
// import TodoList from './TodoList';
// import Css3 from './Css3';

import registerServiceWorker from './registerServiceWorker';
// 下面是ReduxTodo 
import { Provider } from 'react-redux';
import store from './store';
// Provider=我这个提供器连了store那么Provider里面所有的组件都有能力获取到store的内容了
const App = (
    <Provider store={store}>
        <ReduxTodo />
    </Provider>
)
// 上面是ReduxTodo 

// ReactDOM.render(<TodoList />, document.getElementById('root'));
// ReactDOM.render(<AntdTodoList />, document.getElementById('root'));
ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
