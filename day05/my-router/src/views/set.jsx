import React,{Component} from 'react';
import {Route,Link,Redirect} from 'react-router-dom'

function Set(props){
    return <div>
        <Link to="/set/my">个人设置</Link>
        <Link to="/set/address">地址设置</Link>
        <Route path="/set/my" render={() => {
            return <h1>个人设置</h1>
        }}></Route>
        <Route path="/set/address" render={() => {
            return <h1>地址设置</h1>
        }}></Route>
        <Redirect from="/set" to="/set/my"></Redirect>
    </div>
}

export default Set