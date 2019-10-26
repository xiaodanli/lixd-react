import React from 'react';
import {Provider} from 'react-redux'
import Choose from './component/choose'
import Num from './component/num'
import store from './store'
function App() {
  return (
    <div className="App">
        <Provider store={store}>
            {/* <Choose/> */}
            <Num/>
        </Provider>
    </div>
  );
}

export default App;
