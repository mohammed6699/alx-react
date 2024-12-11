import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { createStore } from 'redux'; // Import createStore from redux
import App from './App/App';
import uiReducer from './reducers/uiReducer';

const store = createStore(uiReducer);