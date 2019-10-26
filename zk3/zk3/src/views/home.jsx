import React, { Component } from 'react'
import Head from '../component/head'
import Foot from '../component/foot'
import Item from '../component/item'
import axios from 'axios'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import typeActions from '../store/type/type.action'

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
                this.props.initRight(`/api/right?type=0`)
            }
        })
    }

    changeType(type,index){
        this.setState({
            index
        })
        this.props.initRight(`/api/right?type=${type}`)
    }
}

// function createAction(next){
//     axios.get(`/api/right?type=0`).then(res =>{
//         if(res.data.code === 1){
//             let right = res.data.data;
//             next({type:'INIT_RIGHT',right})
//         }
//     }) 
// }

export default connect((state) => {
    console.log(state)
    return {
        right:state.typeReducer.right
    }
},(dispatch) => {
    return bindActionCreators(typeActions,dispatch)
})(Home)