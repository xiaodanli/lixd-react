import React,{Component} from 'react'
import './index.css'

class Drag extends Component{
    state = {
        left:0,
        top:0
    }
    render(){
        let {left,top} = this.state;
        return (
            <div style={{left,top}} className="box" onMouseDown={this.mousedown}></div>
        )
    }

    componentDidMount(){
        document.addEventListener('mouseup',this.mouseup,false);
        this.time = setInterval(() => {
            console.log("=====")
        },200)
    }

    mousedown = (e) =>{
        let {clientX,clientY} = e;
        let {offsetLeft,offsetTop} = e.target;
        this.x = clientX - offsetLeft;
        this.y = clientY - offsetTop;

        document.addEventListener('mousemove',this.mousemove,false)
    }

    mousemove = (ev) => {
        console.log("mousemove")
        this.setState({
            left:ev.clientX - this.x,
            top:ev.clientY - this.y
        })
    }

    mouseup = () => {
        console.log("mouseup")
        document.removeEventListener('mousemove',this.mousemove,false)
    }

    componentWillUnmount(){
        document.removeEventListener('mouseup',this.mouseup,false)
        clearInterval(this.time)
    }
}

class Wrap extends Component{
    state = {
        isShow:true
    }
    render(){
        let {isShow} = this.state;
        return (
            <div>
                {isShow?<Drag/>:null}
                <button onClick={() => {
                    this.setState({isShow:!isShow})
                }}>显示隐藏</button>
            </div>
        )
    }
}

export default Wrap