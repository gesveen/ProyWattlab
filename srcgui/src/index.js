import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import { I18nextProvider } from "react-i18next";
import i18n from "./i18next";
import './i18next.js';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


ReactDOM.render(
     <Suspense fallback={(<div>Loading</div>)}>
          <App />
     </Suspense>       
  ,

  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
