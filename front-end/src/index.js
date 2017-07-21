import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter as Router} from 'react-router-dom';

import store from './redux/store.js';
//引入react-redux；
import {Provider}from 'react-redux';


function render(){
    
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>,
    document.getElementById('root'));
}
render();

store.subscribe(render);

registerServiceWorker();
