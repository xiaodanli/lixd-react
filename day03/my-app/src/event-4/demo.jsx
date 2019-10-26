import React,{Component} from 'react'

class Wrap extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h1 onClick={this.handleClick.bind(this,参数1,参数2,....)}>标题</h1>
            </div>
        )
    }

    handleClick(形参1,形参2,...,ev){
        console.log(a,b,c,ev);
        console.log("点击标题",this)
    }
}