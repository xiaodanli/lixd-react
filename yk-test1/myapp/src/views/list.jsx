import React, { Component } from 'react'
import Item from '../component/item'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import shopsAction from '../store/shops.action'

class List extends Component {
    state = {
        show:false
    }
    render() {
        console.log(this.props.data)
        let {data,history} = this.props;
        let num = data.filter(item => item.status).length;
        let dialogArr = data.filter(item => item.status);
        let {show} = this.state;
        return (
            <div className="wrap">
                <div className="shops-list">
                    {data && data.map(item => <Item key={item.shopId} item={item} isShow={false}></Item>)}
                </div>
                <footer>
                    <span onClick={() => {
                        this.setState({
                            show:true
                        })
                    }}>购物车{num}</span>
                    <button onClick={() => {
                        this.props.curAddAction();
                        history.push('/create');
                    }}>确认添加</button>
                </footer>
                <div className="dialog" style={{display:show?'block':'none'}}>
                    <div className="inner">
                        {dialogArr && dialogArr.map(item => <Item key={item.shopId} item={item} isShow={false}></Item>)}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        !this.props.data.length && this.props.initData()
    }
}

export default connect(state => {return {
    data:state.shops.data,
    love:state.shops.love
}},dispatch => {
    return bindActionCreators(shopsAction,dispatch)
})(List)