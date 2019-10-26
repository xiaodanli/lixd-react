import React, { Component } from 'react'
import {connect} from 'react-redux'

class Choose extends Component {
    state = {
        flag:'RADIO'
    }
    render() {
        console.log(this.props)
        let {list,chooseList} = this.props;
        return (
            <div className="wrap">
                <div>
                    搜索条件：
                    {
                        chooseList.map((item,index) => <span key={index}>{item.name}</span>)
                    }
                </div>
                <div>
                    品种：
                    {
                        list.map((item,index) => <span key={index} onClick={() => {this.add(index)}}>{item.name}</span>)
                    }
                </div>
                <button onClick={() => {
                    this.setState({flag:'CHECKBOX'})
                }}>多选</button>
            </div>
        )
    }

    add(index){
        let {flag} = this.state;
        if(flag === 'RADIO'){
            this.props.radio(index)
        }else{
            this.props.checkbox(index)
        }
    }
}

export default connect((state) => {
    return {
        list:state.list,
        chooseList:state.chooseList
    }
},(dispatch) => {
    return {
        radio(index){
            dispatch({type:'RADIO',index})
        },
        checkbox(index){
            dispatch({type:'CHECKBOX',index})
        }
    }
})(Choose)