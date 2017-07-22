import {createStore} from 'redux';

import reducer from './reducer.js';

var state={
    images:[],
    todomovies:[],
    comingMovies:[],
    nowPlayfilms:[],
    comingsoonfilms:[],
    filmteails:{},
    listTodoCinema:[],
    txt:"",
    title:"卖座电影"
}
var store=createStore(reducer,state);

export default store;