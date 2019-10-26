import React, { Component } from 'react'
import Head from '../component/head'
import Foot from '../component/foot'
import Item from '../component/item'
import axios from 'axios'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import typeAction from '../store/type/type.action'

class Home extends Component {
    state = {
        left:[],
        index:0
    }
    render() {
        let {left,index} = this.state;
        let {right} = this.props;
        return (
            <div className="wrap">
                <Head></Head>
                <div className="main">
                    <div className="left">
                        <ul>
                            {left.map((item,ind) => <li className={index === ind?'active':''} onClick={()=> this.changeType(item.type,ind)} key={item.type}>{item.name}</li>)}
                        </ul>
                    </div>
                    <div className="right">
                        {right.map((item,index) => <Item key={index} item={item}></Item>)}
                    </div>
                </div>
                <Foot></Foot>
            </div>
        )
    }
    componentDidMount(){
        axios.get('/api/left').then(res => {
            if(res.data.code === 1){
                this.setState({
                    left:res.data.left
                })
                this.props.initRight(res.data.right)
            }
        })
    }

    changeType(type,index){
        this.setState({
            index
        })
        // axios.get(`/api/right?type=${type}`).then(res =>{
        //     if(res.data.code === 1){
        //         this.props.initRight(res.data.data)
        //     }
        // })
        // this.props.initRight()
    }
}

// function createAction(next){
//     axios.get(`/api/right?type=0`).then(res =>{
//         if(res.data.code === 1){
//             // this.props.initRight(res.data.data)
//             let right = res.data.data;
//             console.log(right)
//             next({type:'INIT_RIGHT',right})
//         }
//     })  
// }

function createAction(right){
    return {type:'INIT_RIGHT',right}
}

export default connect((state) => {
    console.log(state)
    return {
        right:state.typeReducer.right
    }
},(dispatch) => {
    return {
        initRight(right){
            dispatch(createAction,right)
        }
    }
    // return {
    //     initRight(){
    //        dispatch(createAction) 
    //     }
    // }
    // return bindActionCreators(typeAction,dispatch)
})(Home)

//bingActionCreators 帮你自动调用dispatch方法

//第一个参数： 所有的方法都会派发到组件的props属性上  方法的返回值是dispatch要派发的action

//第二个参数：dispatch