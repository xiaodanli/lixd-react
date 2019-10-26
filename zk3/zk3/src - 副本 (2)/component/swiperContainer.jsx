import React, { Component } from 'react'
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.min'

export default class SwiperContainer extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="swiper-container" ref="swiper">
                <div className="swiper-wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.swiper = new Swiper(this.refs.swiper)
    }
    componentDidUpdate(){
        this.swiper.update();
    }
}
