import React from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'

import Home from '../views/home'
import Exam from '../views/exam'

function Router(){
    return <BrowserRouter>
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/exam/:type" component={Exam}></Route>
            <Redirect from="/" to="/home"></Redirect>
        </Switch>
    </BrowserRouter>
}

export default Router