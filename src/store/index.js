import { createStore } from 'redux';
import reducer from './reducer';
// react-redux
const store = createStore(reducer);

export default store;