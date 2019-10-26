import React, { Component } from 'react'
import {connect} from 'react-redux'
import store from '../store'
console.log(connect)
class List extends Component{
    constructor(props){
        super(props);
        // store.subscribe(() => {
        //     this.setState({})
        // })
    }
    render(){
        // let {list} = store.getState();
        let {list} = this.props;
        return (
            <ul>
                {list.map((item,ind) => <li onClick={() => {this.props.delMsg(ind)}} key={ind}>{item}</li>)}
            </ul>
        )
    }
    // del = (ind) => {
        // store.dispatch({type:'DEL_MSG',ind})
        // this.props.delMsg(ind);
    // }
}

//connect(()=>{})(组件)  ----> 新的组件

export default connect((state) => {
    return {
        list:state.list
    }
},(dispatch) => {
    return {
        delMsg(ind){
            dispatch({type:'DEL_MSG',ind})
        }
    }
})(List)