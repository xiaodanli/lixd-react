import React from 'react'
import {BrowserRouter,NavLink} from 'react-router-dom'
import routes from './router-setting'

import RouterViews from './router-views'

function Router(){
    
    return <BrowserRouter>
        <nav>
            <NavLink to="/home">首页</NavLink>
            <NavLink to="/manage">管理</NavLink>
        </nav>
        <RouterViews routes={routes}/>
    </BrowserRouter>
}
 
export default Router