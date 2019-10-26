import React, { Component } from 'react'
import Input from './input'
import List from './list'





/**
 * 高阶组件  接收一个组件返回一个新组件
 *  
 * 高阶函数  接受一个函数返回一个新函数
 * 
 * withRouter
 * 
 * function All(props){
 *      return <h1>{props.title}</h1>
 * }
 * 
 * function Hoc(component){
 *      return class extends Component{
 *          render(){
 *              return <component title="标题"></component>
 *          }
 *      }
 * }
 * 
 * Hoc(All)
 * 
 * */ 

// connect()(视图组件)

export default class Messsage extends Component {
    render() {
        return (
            <div>
                <Input/>
                <List/>
            </div>
        )
    }
}
