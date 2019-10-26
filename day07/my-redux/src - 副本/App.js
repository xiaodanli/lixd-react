import React from 'react';
import Computed from './component/computed'
import Message from './component/message'
import {Provider} from 'react-redux'
import store from './store/index'
function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Computed/>
            <Message/>
        </Provider>
    </div>
  );
}

export default App;
