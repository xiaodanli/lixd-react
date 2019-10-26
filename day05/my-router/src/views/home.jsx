import React,{Component} from 'react';

/**
 *  history: 浏览器对象
    location: 针对当前路径解析出来的信息
    match:当前匹配的一些信息
 * */ 

function Home(props){
    console.log(props)
    return <h1>home</h1>
}

export default Home