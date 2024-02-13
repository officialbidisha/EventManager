import {applyMiddleware, compose} from 'redux';
import {thunk} from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';
import { eventReducer } from './reducers/eventreducer';

//code to setup redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({reducer: eventReducer}, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;