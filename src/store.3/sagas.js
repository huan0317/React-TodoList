import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';


function* getInitList() {
    try {
        const res = yield axios.get('/list.json');
        const action = initListAction(res.data);
        yield put(action);
    }catch(e){
        console.log('list.json网络请求失败')
    }
    
    // axios.get('/list.json')
    //     .then((res)=>{
    //     console.log(res)
    //     const data = res.data;
    //     const action = initListAciton(data);
    //     console.log(action)
    //     put(action);
    // })
}

// generator 函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);//接收的action类型，执行方法
}


// 当容器组件加载完毕之后会派发一个aciton
// 不仅仅redux能接收到，sagas里面 mySaga()也能接收到aciton
export default mySaga;