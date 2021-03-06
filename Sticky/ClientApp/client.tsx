﻿import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import StickyApp from './stickyApp';

function configureStore(initialState: any) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

export const store = configureStore(undefined);

ReactDOM.render(
    <Provider store={store}>
        <StickyApp />
    </Provider>,
    document.getElementById('root')
);
