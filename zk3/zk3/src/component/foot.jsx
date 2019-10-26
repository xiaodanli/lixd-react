import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Foot extends Component {
    render() {
        return (
            <footer>
                <NavLink to="/home">
                    <span className="icon"></span>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/classify">
                    <span className="icon"></span>
                    <span>分类</span>
                </NavLink>
                <NavLink to="/car">
                    <span className="icon"></span>
                    <span>购物车</span>
                </NavLink>
                <NavLink to="/my">
                    <span className="icon"></span>
                    <span>我的</span>
                </NavLink>
            </footer>
        )
    }
}

export default Foot