#### redux  状态管理器

#### 安装：

npm i redux -S

#### api

//函数：1.参数  2.功能  3.返回值   4.何时调用

>1.createStore()

- 功能：创建仓库  描述整个仓库数据流的过程

- 参数：第一个参数：reducer 必须是函数

    1.1>reducer = (state,action) => {return }

        第1个参数：仓库的状态
        第2个参数：action

- 第二个参数：state的初始值

- 返回值：仓库对象

>2.store.getState()  {num:1,list:[3232,233,2323]}

- 功能：获取状态  reducer的返回值

>3.store.dispatch(action)

- 功能：派发reducer 

- 参数：action 必须是一个对象 必须要有type属性

>4.store.subscribe(() => {})  

- 功能：监听仓库state的变化，触发回调函数

- 参数：函数

##### react-redux

安装

npm i react-redux -S

<!-- connect -->







