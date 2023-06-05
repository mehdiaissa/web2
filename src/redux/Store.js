import Reducer  from './Reducer'
import { combineReducers,createStore } from 'redux';

const store=createStore(combineReducers({Reducer}))
export default store;