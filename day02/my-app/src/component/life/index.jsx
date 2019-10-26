import React,{Component} from 'react'

class Son extends Component{
    constructor(props){
        super(props)
        this.state = {
            isShow:props.isShow
        }
    }
    render(){
        return <div>{this.state.isShow?'true':'false'}</div>
    }
    componentWillReceiveProps(nextProps){
        this.setState({isShow:nextProps.isShow})
        console.log(nextProps);
    }
    componentWillUnmount(){
        console.log("组件卸载")
    }
}

class Wrap extends Component{
    constructor(props){
        super(props)
        this.state = {
            isShow:true
        }
    }
    componentWillMount(){
        console.log("组件将要渲染")
    }

    render(){
        console.log("组件渲染")
        return (
            <div >
                {this.state.isShow?<Son isShow={this.state.isShow}/>:null}
                <button onClick={() => {this.setState({isShow:true})}}>true</button>
                <button onClick={() => {this.setState({isShow:false})}}>false</button>
            </div>
        )
    }

    componentDidMount(){
        console.log("组件渲染完毕")
    }

    shouldComponentUpdate(nextProps,nextState){
        if(this.state.isShow === nextState.isShow){
            return false
        }else{
            return true
        }
    }
    componentWillUpdate(){
        console.log("组件更新前")
    }
    componentDidUpdate(){
        console.log("组件更新完成")
    }

}

export default Wrap