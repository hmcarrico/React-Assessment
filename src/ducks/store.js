import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware'
import taskReducer from './reducer';

const reducer = combineReducers({
    taskList: taskReducer
})

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));