import React from 'react';
import Router from './router/'
import {Provider} from 'react-redux'
import store from './store/'
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
