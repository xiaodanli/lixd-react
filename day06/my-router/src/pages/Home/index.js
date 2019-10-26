
import React, { Component } from 'react'
import store from '../../store'

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            ...store.getState()
        }
        console.log(store.getState())
        store.subscribe(()=>{
            this.storeChange()
        })
    }

    storeChange = ()=>{
       this.setState({
        ...store.getState()
       }) 
    }

    render() {
        return (
            <div>
                {this.state.num}
               <button onClick={()=>this.handleClick('ADD')}>+</button> 
               <button onClick={()=>this.handleClick('DIS')}>-</button> 
            </div>
        )
    }
    handleClick = (type)=>{
        const action = {
            type
        } 
        store.dispatch(action)
    }
}

