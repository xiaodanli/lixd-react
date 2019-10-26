import React from 'react';
import Son from './component/son'
import context from './util/context'
let data = {
    list:[
        "标题一",
        "标题二",
        "标题三"
    ],
    num:0
}
function App() {
  return (
    <div className="App">
        <context.Provider value={data}>
            <Son/>
        </context.Provider>
    </div>
  );
}

export default App;
