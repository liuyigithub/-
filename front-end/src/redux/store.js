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
    txt:""
}
var store=createStore(reducer,state);

export default store;