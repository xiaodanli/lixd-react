import React from 'react'
import {NavLink} from 'react-router-dom'

let data = [
    {
        icon:"",
        text:"顺序练习",
        type:0
    },
    {
        icon:"",
        text:"模拟考试",
        type:1
    },
    {
        icon:"",
        text:"随机练习",
        type:2
    }
]

function Home(){
    return <div>
         {data.map((item,ind) => <NavLink key={ind} to={`/exam/${item.type}`}>{item.text}</NavLink>)}   
    </div>
}

export default Home