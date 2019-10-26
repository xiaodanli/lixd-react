import React from 'react'
import {NavLink}  from 'react-router-dom'

function Foot(){
    return <footer>
        <NavLink to="/movies">电影</NavLink>
        <NavLink to="/cinema">影院</NavLink>
        <NavLink to="/my">我的</NavLink>
    </footer>
}

export default Foot