import React, { Component } from 'react'
import SwiperContainer from '../component/swiperContainer'
import SwiperSlide from '../component/swiperSlide'

import axios from 'axios'

import {NavLink} from 'react-router-dom'

import {connect} from 'react-redux'

import {ADD_PRO} from '../store/car/car.actionType'

class Detail extends Component {
    state = {
        detail:{}
    }
    render() {
        let {banner,name,price} = this.state.detail;
        console.log(banner);
        return (
            <div>
               <SwiperContainer>
                   {banner && banner.map((item,index) => <SwiperSlide key={index}>
                       <img src={item.url} alt=""/>
                   </SwiperSlide>)}
                </SwiperContainer>
                <h2>{name}</h2>
                <span>{price}</span>
                <footer>
                    <NavLink to="/home">首页</NavLink>
                    <NavLink to="/car">购物车</NavLink>
                    <button onClick={() => {this.addpro(this.state.detail)}}>添加购物车</button>
                </footer>
            </div>
        )
    }

    componentDidMount(){
        let {match} = this.props;
        axios.get(`/api/detail?id=${match.params.id}`).then(res => {
            console.log(res);
            if(res.data.code === 1){
                this.setState({
                    detail:res.data.data
                })
            }

        })
    }

    addpro = (detail) => {
        this.props.addPro(detail)
    }
}

export default connect(state => {
    return {
        a:'a'
    }
},dispatch => {
    return {
        addPro(detail){
            dispatch({type:ADD_PRO,detail})
        }
    }
})(Detail)