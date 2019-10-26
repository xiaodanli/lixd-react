import React from 'react';
import Router from './router/index'
import './scss/style.scss'
import {Provider} from 'react-redux'
import store from './store/'

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Router></Router>
        </Provider>
    </div>
  );
}

export default App;
