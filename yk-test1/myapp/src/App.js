import React from 'react';
import Router from './router'
import store from './store'
import {Provider} from 'react-redux'
import './scss/style.scss'

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Router/>
        </Provider>
    </div>
  );
}

export default App;
