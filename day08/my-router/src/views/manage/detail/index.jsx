import React,{Component} from 'react'
import {NavLink,Route,Redirect,Switch} from 'react-router-dom'
import RouterViews from '../../../router/router-views'

class Detail extends Component{
    render(){
        return (
            <div>
                <div className="top">
                    <NavLink to="/manage/detail/card">打卡</NavLink>
                    <NavLink to="/manage/detail/check">考勤</NavLink>
                </div>
                <div className="con">
                    {/* <Switch>
                        <Route path='/manage/detail/card' component={Card}/>
                        <Route path='/manage/detail/check' component={Check}/>
                        <Redirect from="/manage/detail" to="/manage/detail/card"/>
                    </Switch> */}
                    <RouterViews routes={this.props.routes}></RouterViews>
                </div>
            </div>
        )
    }
}
export default Detail