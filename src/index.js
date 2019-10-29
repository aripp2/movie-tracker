import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Containers/App/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import { BrowserRouter } from 'react-router-dom'

const store = createStore(rootReducer, composeWithDevTools());



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root'));
  
serviceWorker.unregister();
// const router = (
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// )

// ReactDOM.render(
// <Provider store={store}>
//   {router}
// </Provider>,
// document.getElementById('root'));

