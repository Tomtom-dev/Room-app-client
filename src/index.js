import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import store from "./store"
import {browserRouter as Router} from "./serviceWorker"

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
 