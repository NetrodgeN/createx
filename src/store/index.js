import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import React from 'react';

export const store = createStore(rootReducer, applyMiddleware(thunk))