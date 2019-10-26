import React,{Component} from 'react';
import {BrowserRouter,HashRouter,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import Home from './views/home'
import List from './views/list'
import Set from './views/set'
import Detail from './views/detail'
import './app.css'

console.log(HashRouter)

//BrowserRouter  --- history  H5 api

//HashRouter ---- hash  

//理解：路由系统的容器，所有路由都必须要放在这个容器内，才能实现路由变化

// Route <Route path=""  component="">  航线  render={() => {return react元素}}

//Link to:string  Object  replace 替换：boolean

class App extends Component{
    render(){
        return <BrowserRouter>
            <ul>
                <li>
                    <NavLink to="/home" activeClassName="high">home</NavLink>
                    <NavLink to={{pathname:'/list'}} activeClassName="high" replace={false}>list</NavLink>
                    <NavLink to="/set" activeClassName="high">set</NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/home/a" render={()=>{
                    return <h1>a</h1>
                }}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/set" component={Set}></Route>
                <Route path='/detail/:id' component={Detail}/>
                <Redirect from="/" to="/home"></Redirect>
            </Switch>
        </BrowserRouter>
    }
}

export default App;
