import React,{Component} from 'react'
import axios from 'axios'
import '../mock/list'

class Son extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:props.title
        }
    }
    render(){
        return <div>{this.state.title}</div>
    }

    // componentWillReceiveProps(nextProps){
    //     this.setState({title:nextProps.title})
    //     console.log("组件将要接受最新的props",nextProps)
    // }

    static getDerivedStateFromProps(nextProps,nextState){
        // this.setState({title:nextProps.title})
        return {title:nextProps.title}  //返回的是就是setState的第一个参数或者null，null时，不会更新state
    }
    getSnapshotBeforeUpdate(){
        console.log("组件更新前执行")
        return 123
    }
    componentDidUpdate(prevProps,prevState,value){
        console.log("组件更新完成",value)
    }
    componentWillUnmount(){
        console.log("卸载")
    }
}

class Wrap extends Component{
    // 初始化函数 接收props，设置默认的state
    constructor(props){
        super(props);
        this.state = {
            title:'生命周期'
        }
    }
    //组件即将被渲染
    componentWillMount(){
        console.log("组件即将被渲染");
    }
    //组件正在渲染，进行diff算法，比较最小化差异，进行局部更新
    render(){
        return <div>
            <h1 onClick={() => {this.setState({title:'更新state'})}}>{this.state.title}</h1>
            {<Son title={this.state.title}/>}
        </div>
    }
    //组件初始渲染完成 ---- 发送ajax请求
    componentDidMount(){
        console.log("组件初始渲染完成")
        axios.get('/api/list').then(res => {
            console.log(res);
        })
    }

    shouldComponentUpdate(){
        console.log("组件应该更新吗？")
        return true
    }

    componentWillUpdate(nextProps,nextState){
        console.log("组件即将被更新",nextProps,nextState)
    }

    componentDidUpdate(prevProps,prevState){
        console.log("组件更新完成",prevProps,prevState)
    }
}

export default Wrap