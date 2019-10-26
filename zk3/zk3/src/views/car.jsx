import React, { Component } from 'react'
import Head from '../component/head'
import Foot from '../component/foot'

import {connect} from 'react-redux'
import Count from '../component/count'
import {bindActionCreators} from 'redux'
import carActions from '../store/car/car.action'


class Car extends Component {
    render() {
        let {car,checkAll} = this.props;
        return (
            <div className="wrap">
                <Head></Head>
                <div className="car-list">
                    {
                        car.map((item,index) => {
                            return <div key={index}>
                                <input type="checkbox" checked={item.checked} onChange={() => {
                                    this.changecheck(item.id,item.checked)
                                }}/>
                                <dl>
                                    <dt>
                                        <img src={item.url} alt=""/>
                                    </dt>
                                    <dd>
                                        <h2>{item.name}</h2>
                                        <span>价格:{item.price}</span>
                                        <Count item={item}></Count>
                                    </dd>
                                </dl>
                            </div>
                        })
                    }
                    <div>
                        <input type="checkbox" checked={checkAll} onChange={() => {
                            this.props.changeAll(!checkAll)
                        }}/>全选
                        <br></br>
                        总价：{this.props.totalMoney}
                    </div>
                </div>
                <Foot></Foot>
            </div>
        )
    }

    changecheck = (id,checked) => {
        this.props.changeCheck(id,!checked)
    }
}

export default connect(state=>{
    return {
        car:state.car.car,
        totalMoney:state.car.totalMoney,
        checkAll:state.car.checkAll
    }
},(dispatch) => {
    return bindActionCreators(carActions,dispatch) 
})(Car)

//bindActionCreators  自动帮你调用dispatch  ----> redux

// 第一个参数：所有dispatch的对象  这些函数派发到组件的props属性上  这些函数的返回值就是dispatch派发的action对象,函数

//第二个参数：dispatch
