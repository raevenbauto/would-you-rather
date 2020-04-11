import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from "redux";
import combineReducers from "./reducers"
import combineMiddleware from "./middleware"
import {Provider} from "react-redux";
import App   from "./component/App";

const store = createStore(combineReducers, combineMiddleware);

ReactDOM.render(
     <Provider store={store}>
         <App />
     </Provider>
    ,document.getElementById('root'));
