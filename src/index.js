import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'

ReactDOM.render(
<Provider>
  <App /> document.getElementById('root'));
</Provider>,

serviceWorker.unregister();
