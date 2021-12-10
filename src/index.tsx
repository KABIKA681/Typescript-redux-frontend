import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
// import AppStateProvider from './login/app/provider';


import makeStore from './redux/store'

import App from './App';

const store = makeStore();

ReactDOM.render(

  <Provider store={store}>
    {/* <AppStateProvider> */}
    <Router>
      <App />
    </Router>
    {/* </AppStateProvider> */}
  </Provider>
  ,
  document.getElementById('root')
);


