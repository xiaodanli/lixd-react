import React from 'react';
import Parent from './component/parent'
import context from './util/context'
function App() {
  return (
    <div className="App">
        <context.Provider value={{title:"connect 传递的数据"}}>
            <Parent/>
        </context.Provider>
    </div>
  );
}

export default App;
