import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';

const history = createBrowserHistory();
const store = configureStore;


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App history={history}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
