import React,{Component}  from 'react'
import data from '../mock/data'
import ButtonCount from './Button'

class Left extends Component{
    state = {
        selected:-1
    }
    render(){
        let {selected} = this.state;
        return (
            <div className="left" ref="left">
                {data.map((item,index) => <ButtonCount key={index} item={item}
                    active={selected === index}
                    handClick = {this.handClick}
                    index={index}
                ></ButtonCount>)}
            </div>
        )
    }
    componentDidMount(){
        document.addEventListener('keydown',this.keydown)
    }

    keydown = (e) => {
        let selected = data.findIndex(item => item.keycode === e.keyCode);
        console.log(selected)
        let btn = this.refs.left.children[selected];

        let audio = btn.querySelector('audio');

        audio && this.handClick(selected,audio);
    }

    handClick = (selected,audio) => {
        this.setState({
            selected:selected
        })
        clearTimeout(this.time);
        audio.play();
        this.time = setTimeout(() => {
            this.setState({
                selected:-1
            })
        },300)
    }

    componentWillUnmount(){
        document.removeEventListener('keydown',this.keydown);
        clearTimeout(this.timer)
    }
}



export default Left