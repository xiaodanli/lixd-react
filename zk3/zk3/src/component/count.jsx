import React, { Component } from 'react'
import {connect} from 'react-redux'
import {CHANEG_NUM} from '../store/car/car.actionType'

class Count extends Component {
    render() {
        let {num,id} = this.props.item;
        return (
            <div>
                <span onClick={() => {this.changenum(id,num,true)}}>-</span>
                <span>{num}</span>
                <span onClick={() => {this.changenum(id,num,false)}}>+</span>
            </div>
        )
    }
    changenum = (id,num,flag) => {
        if(flag){
            if(num > 1){
                num = num -1
            }
        }else{
            num = num + 1
        }
        this.props.changeNum(id,num)

    }
}

export default connect(state=>{},dispatch => {
    return {
        changeNum(id,num){
            dispatch({type:CHANEG_NUM,id,num})
        }
    }
})(Count)
