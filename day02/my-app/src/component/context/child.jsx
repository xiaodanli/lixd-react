import React,{Component} from 'react'
import context from './context'
let {Consumer} = context;

class Child extends Component{
    render(){
        return (
            <div>
                子级组件
                <Consumer>
                    {
                       (value) => {
                            console.log(value)
                            return  <div>
                                <h1>{value.title}</h1>
                                <button onClick={() => {value.fn('修改祖先数据')}}>修改祖先数据</button>
                            </div> 
                       } 
                    }
                </Consumer>
            </div>
        )
    }
}

export default Child