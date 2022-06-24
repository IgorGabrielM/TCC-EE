import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import reducer from './reducers';

const middleWare = applyMiddleware(reduxThunk);

const store = createStore(reducer, middleWare)

const renderReacDom = () => {
  ReactDOM.render(
    <Provider store={store} >
      <HashRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HashRouter>
    </Provider>,
    document.getElementById('root')
  )
}

reportWebVitals();
if (window.cordova) {
  document.addEventListener('deviceready', () => {
    renderReacDom();
  }, false);
} else {
  renderReacDom();
}