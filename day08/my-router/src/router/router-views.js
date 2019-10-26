import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

function RouterViews(props){
    let {routes} = props;
    let routeArr = routes.filter(item => !item.redirect)
    let redirectArr = routes.filter(item => item.redirect)
    return <Switch>
        {/* <Route path="/home" component={Home}/>
        <Route path='/manage' component={Manage}/>
        <Redirect from="/" to="/home"></Redirect> */}
        {
            // /manage  ---> render () => {}  ----> manage/index.jsx

            // /manage/detail ---> render () => {} ----> manage/detail/index.js
            routeArr.map((item,index) => <Route path={item.path} render={() => {
                return <item.component routes={item.children}></item.component>
            }} key={index}/>)
        }
        {
            redirectArr.map((item,index) => <Redirect from={item.path} to={item.redirect} key={index}></Redirect>)
        }
    </Switch>
}

export default RouterViews