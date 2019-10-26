import React,{Component} from 'react'
import {findDOMNode,unmountComponentAtNode} from 'react-dom'

class Son extends Component{
    render(){
        return <div>
            <header>header</header>
            {this.props.children}
            {this.props.mark}
        </div>
    }
}

class Parent extends Component{
    render(){
        console.log(this)
        return (
            <div>
                {/* <video src=""></video> */}
                <Son ref={(com) => {console.log(findDOMNode(com))}} mark='mark'>
                    <div>
                        <span>
                            dadsf
                        </span>
                    </div>
                </Son>
                <header ref={(tit) => {console.log(tit)}}>标题</header>
                <button onClick={() => {unmountComponentAtNode(document.querySelector('#root'))}}>卸载所有组件</button>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.refs.son)
    }
}

export default Parent