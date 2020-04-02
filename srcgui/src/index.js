import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import reducer from './store/reduces/auth';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const store = createStore(reducer, composeEnhances(
     applyMiddleware(thunk)
));

const app = (
     <Provider store={store}>
          <Suspense fallback={(<div>Loading</div>)}>
               <App />
          </Suspense>
     </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();