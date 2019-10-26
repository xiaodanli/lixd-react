import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import shopActions  from '../store/shops.action'

class Home extends Component {
    render() {
        let {history,list} = this.props;
        console.log(list)
        return (
            <div className="wrap">
                <button onClick={() => {
                    this.props.clearAction();
                    history.push('/create')
                }}>创建投票</button>
                <div className="list-box">
                    <span>我创建多的投票</span>
                    <ul className="list">
                        {list && list.map((item,index) => <li key={index}>
                            <h2>{item.val}</h2>
                            <span>{item.time}</span>
                        </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(state => {
    return {
        list:state.shops.list
    }
},dispatch => {
    return bindActionCreators(shopActions,dispatch)
})(Home)
