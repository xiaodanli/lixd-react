import React,{Component} from 'react'
import './index.css'

class EventDemo extends Component{
    render(){
        return (
            <div className="red" ref="red" onClickCapture={() => {this.handClick('sss')}}>
                <div className="green" ref="green" onClick={(ev) => {
                    console.log(ev.target)
                    alert('green合成事件')
                }}>
                    <div className="blue" ref="blue"></div>
                </div>
            </div>
        )
    }

    handClick = (ata) => {
        console.log(this)
    }
    componentDidMount(){
        // this.refs.red.addEventListener('click',() => {alert('red')},false)
        this.refs.green.addEventListener('click',(e) => {
            console.log(e.target)
            alert('green');
            // e.stopPropagation();
        },false)
        // this.refs.blue.addEventListener('click',() => {alert('blue')},false)
    }
}

export default EventDemo