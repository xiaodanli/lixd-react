import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

function RouterView(props){
    let {routes} = props;
    let routeArr = routes.filter(item => !item.redirect);
    let redirectArr = routes.filter(item => item.redirect);
    return <Switch>
        {
            // /movies  --->  Movies
            // routeArr.map((item,index) => <Route key={index} path={item.path} component={item.component}></Route>)
            routeArr.map((item,index) => <Route key={index} path={item.path} render={(props) => {
                // <Movies routes={item.children}></Movies>
                return <item.component routes={item.children} {...props}></item.component>
            }}></Route>)
        }
        {
            redirectArr.map((item,index) => <Redirect key={index} from={item.path} to={item.redirect}></Redirect>)
        }
    </Switch>
}



export default RouterView