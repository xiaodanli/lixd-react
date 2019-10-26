import React,{Component} from 'react'

/***
 * 创建阶段：
 * 
 * 1>constructor(){}  初始化函数，接收Props,定义初始状态   1次
 * 
 * 2>componentWillMount(){} 组件渲染前  即将废弃    1次
 *  
 * 3>render(){}  组件渲染   多次  diff  比较最小化差异，进行局部更新
 * 
 * 4>componentDidMount(){}  组件初始渲染完毕  操作DOM  发ajax请求  1次
 * 
 * 变化阶段：
 * 
 * state改变：
 * 
 * 1>shouldComponentUpdate(nextProps,nextState){return false/true}   
 * 
 * 组件是否要更新？ 优化
 * 
 * 2>componentWillUpdate(nextProps,nextState){}  组件更新前
 * 
 * 3>render(){}  组件更新
 * 
 * 4>componentDidUpdate(prevProps,prevState){}   组件更新完毕
 * 
 * props:
 * 
 * componentWillReceiveProps(){}  props改变
 * 
    shouldComponentUpdate(nextProps,nextState){return false/true}   
 * 
 * 组件是否要更新？ 优化
 * 
 * componentWillUpdate(nextProps,nextState){}  组件更新前
 * 
 * render(){}  组件更新
 * 
 * componentDidUpdate(prevProps,prevState){}   组件更新完毕
 * 
 * 卸载阶段：
 * 
 * componentWillUnmount(){}  组件将要卸载
 * 
 * 
 */
class Son extends Component{
    constructor(props){
        super(props)
        this.state = {
            sonMsg:props.msg
        }
    }

    render(){
        return (
            <div>{this.state.sonMsg}</div>
        )
    }

    // componentWillReceiveProps(nextProps,nextState){
    //     this.setState({sonMsg:nextProps.msg})
    // }

    static getDerivedStateFromProps(nextProps,nextState){
        return {sonMsg:nextProps.msg}
    }

    componentWillUnmount(){
        console.log("儿子卸载")
    }
}

class Parent extends Component{
    constructor(props){
        console.log("constructor初始化函数，接收Props")
        super(props)
        this.state = {
            msg:'hello',
            isShow:true
        }
    }
    // componentWillMount(){
    //     console.log("组件渲染前componentWillMount")
    // }

    static getDerivedStateFromProps(){
        return null
    }
    render(){
        console.log("render");
        let {isShow} = this.state;
        return (
            <div>
                {isShow?<Son msg={this.state.msg}/>:null}
                <button onClick={() => {this.setState({isShow:!isShow})}}>change</button>
                <button onClick={() => {this.setState({msg:'你好'})}}>改变msg</button>
                <div>{this.state.msg}</div>
            </div>
        )
    }
    componentDidMount(){
        this.setState({isShow:false},() => {
            console.log("-====",this.state.isShow)
        })
        
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextState)
        if(this.state.msg === nextState.msg){
            return false
        }
        return true
    }
    // componentWillUpdate(){
    //     console.log("组件更新前componentWillUpdate")
    // }
    getSnapshotBeforeUpdate(){
        return '877892jkkjh'
    }
    componentDidUpdate(prevProps,prevState,value){
        console.log(this.state.msg)
        console.log(prevState.msg)
        console.log("value",value)
        console.log("组件更新完毕componentDidUpdate")
    }
}

export default Parent