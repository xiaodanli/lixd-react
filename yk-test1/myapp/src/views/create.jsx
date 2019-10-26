import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import shopActions from '../store/shops.action'
import Item from '../component/item'

class Create extends Component {
    state = {
        val:this.props.val
    }
    render() {
        let {history,love} = this.props;
        let {val} = this.state;
        return (
            <div className="wrap">
                <div>
                    主题：<input type="text" value={val} onChange={(e) => {
                        this.setState({
                            val:e.target.value
                        })
                        this.props.changeIpt(e.target.value);
                    }}/>
                </div>
                <button onClick={() => {history.push('/list')}}>添加喜欢的餐厅</button>
                <div className="love-list">
                    {love && love.map(item => <Item key={item.shopId} item={item} isShow={true}></Item>)}
                </div>

                <button onClick={this.create}>生成投票</button>
            </div>
        )
    }

    create = () => {
        let val = this.state.val;
        val && this.props.createAction(val);
        this.props.history.push('/home');
    }
}

export default connect(state => {
    return {
        love:state.shops.love,
        val:state.shops.val
    }
},dispatch => {
    return bindActionCreators(shopActions,dispatch)
})(Create)
