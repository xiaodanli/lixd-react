import React, { Component } from 'react'
import {connect} from 'react-redux'
class Input extends Component{
    constructor(props){
        super(props)
        this.state = {
            msg:''
        }
    }
    render(){
        let {msg} = this.state;
        return (
            <div>
                <input type="text" value={msg} onChange={(ev) => {
                    let msg = ev.target.value;
                    this.setState({
                        msg
                    })
                }} onKeyDown={this.add}/>
            </div>
        )
    }

    add = (ev) => {
        if(ev.keyCode === 13){
            this.props.addMsg(ev.target.value)
            // store.dispatch({type:'ADD_MSG',msg:ev.target.value})
        }
    }
} 

export default connect((state) => {
    return {}
},(dispatch) => {
    return {
        addMsg(msg){
            dispatch({type:'ADD_MSG',msg})
        }
    }
})(Input)