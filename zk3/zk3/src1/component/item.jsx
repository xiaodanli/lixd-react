import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Item extends Component {
    render() {
        let {item,history} = this.props;
        console.log(this.props)
        return (
            <dl onClick={() => {
                history.push(`/detail/${item.id}`)
            }}>
                <dt>
                    <img src={item.url} alt=""/>
                </dt>
                <dd>
                    <h2>{item.name}</h2>
                    <span>价格：{item.price}</span>
                </dd>
            </dl>
        )
    }
}

export default withRouter(Item)