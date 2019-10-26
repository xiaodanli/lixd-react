import React from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Home from '../views/home'
import Create from '../views/create'
import List from '../views/list'
import Antd from '../views/antd'

function Router(){
    return <BrowserRouter>
        <Switch>
            <Route path="/home" component={Home}></Route>  
            <Route path="/create" component={Create}></Route>
            <Route path="/list" component={List}></Route> 
            <Route path="/antd" component={Antd}></Route>   
            <Redirect from="/" to="/antd"></Redirect>
        </Switch>
    </BrowserRouter>
}

export default Router