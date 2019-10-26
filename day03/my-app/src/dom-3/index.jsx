import React,{Component} from 'react'
import {findDOMNode} from 'react-dom'

class Son extends Component{
    render(){
        return (
            <header ref="title">儿子标题</header>
        )
    }
}

class Demo extends Component{
    state={
        username:'zs'
    }
    render(){
        return (
            <div>
                {/* <h1 ref="title">标题</h1> */}
                {/* <h1 ref={(el) => {el.style.background = 'red'}}>标题</h1> */}
                <input ref={(el) => {this.ipt = el}} value={this.state.username} onChange={(e) => {
                    this.setState({username:e.target.value})
                }}/>
                <button onClick={this.handle}>获取焦点</button>
                <Son ref={(el) => {console.log(findDOMNode(el))}}/>
            </div>
        )
    }
    handle =() => {
        this.ipt.focus();
    }
    componentDidMount(){
        // console.log(this.refs.title)
    }
}

export default Demo