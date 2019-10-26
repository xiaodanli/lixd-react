import React from 'react'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'

import Home from '../views/home'

import Detail from '../views/detail'

import Classify from '../views/classify'

import Car from '../views/car'

import My from '../views/my'

function Router(){
    return <BrowserRouter>
        {/* Route,Redirect */}
        <Switch> 
            <Route path='/home' component={Home}/>
            <Route path='/classify' component={Classify}/>
            <Route path='/car' component={Car}/>
            <Route path='/my' component={My}/>
            <Route path='/detail/:id' component={Detail}/>
            <Redirect from="/" to="/home"></Redirect>
        </Switch>
    </BrowserRouter>
}

export default Router