// import { createStore } from "redux";
import { legacy_createStore as createStore } from 'redux';
import addItemReducer from './reducer';

const store=createStore(addItemReducer)
export default store;