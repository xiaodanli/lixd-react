import React,{Component} from 'react'
import Child from './child'

class Parent extends Component{
    render(){
        return (
            <div>
                父级组件
                <Child/>
            </div>
        )
    }
}

export default Parent