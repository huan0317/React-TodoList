import { createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'// 1
import todoSagas from './sagas';//4

const sagaMiddleware = createSagaMiddleware();// 2
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));//3

const store = createStore(
    reducer,
    enhancer 
);
sagaMiddleware.run(todoSagas);//5

export default store;