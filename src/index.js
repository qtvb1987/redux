import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer'
let store = createStore(reducer);
console.log(store.getState());
store.dispatch({
    type: 'ADD',
    title: '中国人',
    singer: '刘德华'
});
console.log(store.getState());
let id = store.getState().data[0].id;
store.dispatch({
    type: 'REMOVE',
    id: id
});
console.log(store.getState());
ReactDOM.render(
    <h1>欢迎大家来到redux</h1>,
    document.getElementById('root')
);

