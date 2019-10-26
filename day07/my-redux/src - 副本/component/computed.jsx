import React, { Component } from 'react'
import store from '../store'

export default class Computed extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let {num} = store.getState()
        return (
            <div>
                <button onClick={() => {this.handClick('DIS')}}>-</button>
                <span>{num}</span>
                <button onClick={() => {this.handClick('ADD')}}>+</button>
            </div>
        )
    }
    handClick = (type) => {
        store.dispatch({type,steup:10})
    }
}



