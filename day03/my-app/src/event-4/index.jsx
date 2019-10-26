import React,{Component} from 'react'
import './index.css'

class Son extends Component{
    render(){
        return (
            <div>
                <h1 ref="title">儿子组件</h1>
            </div>
        )
    }
    change(){
        console.log("======")
    }
    componentDidMount(){
        this.refs.title.addEventListener('click',this.change,false)
    }

    componentWillUnmount(){
        console.log("组件卸载")
        this.refs.title.removeEventListener('click',this.change,false)
    }
}

class Wrap extends Component{
    state = {
        isShow:true
    }
    render(){
        let {isShow} = this.state;
        return (
            <div className="red" ref="red">
                <div className="green" ref="green">
                    <div className="yellow" ref="yellow"  onClick={() => {console.log("yellow合成事件")}}>
                        <div className="blue" ref="blue" onClick={this.handleClick}></div>
                        {this.state.isShow ? <Son/> : null}
                        <button onClick={() => {this.setState({isShow:!isShow})}}>切换</button>
                    </div>
                </div>
            </div>
        )
    }
    handleClick = () => {
        console.log('blue的合成事件');
    }
    componentDidMount(){
        // this.refs.red.addEventListener('click',() => {console.log('red')},false);

        // this.refs.green.addEventListener('click',() => {console.log('green')},false);

        this.refs.yellow.addEventListener('click',(ev) => {
            // ev.stopPropagation();
            console.log('yellow');
        },false);

        // this.refs.blue.addEventListener('click',() => {console.log('blue')},false);
    }
}

export default Wrap