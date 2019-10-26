import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import shopsAction from '../store/shops.action'

class Item extends Component {
    render() {
        let {defaultPic,shopName,status} = this.props.item;
        let {isShow} = this.props;
        return (
            <dl className="item">
                <dt>
                    <img src={defaultPic} alt=""/>
                </dt>
                <dd className="info">
                    <h2>{shopName}</h2>
                </dd>
                <dd>
                    {isShow ? <span onClick={this.del}>删除</span> : <span onClick={this.changeAdd}>{status?'-':'+'}</span>}
                </dd>
            </dl>
        )
    }
    changeAdd = () => {
        let {shopId,status} = this.props.item;
        this.props.changeAddAction(shopId,!status);
    }
    del = () => {
        let {shopId} = this.props.item;
        this.props.delAction(shopId);
    }
}

export default connect(state => {return {}},dispatch=>{
    return bindActionCreators(shopsAction,dispatch)
})(Item)
