import React,{Component} from 'react'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import Detail from './detail/index'
import Census from './census'
import RouterViews from '../../router/router-views'

class Manage extends Component{
    render(){
        return (
            <div className="wrap">
                <div className="left">
                    <NavLink to="/manage/detail">考勤明细</NavLink>
                    <NavLink to="/manage/census">审批统计</NavLink>
                </div>
                <div className="right">
                {/* <Switch>
                    <Route path="/manage/detail" component={Detail}/>
                    <Route path='/manage/census' component={Census}/>
                    <Redirect from="/manage" to="/manage/detail"></Redirect>
                </Switch> */}
                <RouterViews routes={this.props.routes}></RouterViews>
                </div>
            </div>
        )
    }
}
export default Manage