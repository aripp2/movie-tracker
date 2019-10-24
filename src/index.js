import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
<<<<<<< HEAD
import App from './Containers/App/App';

=======
import App from './containers/App/App';
>>>>>>> e233e8e66101d7b507809997fcd83606047ef75e
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import { BrowserRouter } from 'react-router-dom'

const store = createStore(rootReducer, composeWithDevTools());

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(
<Provider store={store}>
  {router}
</Provider>,
document.getElementById('root'));

