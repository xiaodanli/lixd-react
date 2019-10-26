import React,{Component} from 'react'
import watch from '../../util/watch'

class TodoInput extends Component{
    state = {
        val:''
    }
    render(){
        let {val} = this.state;
        return (
            <header>
                <span>todolist</span>
                <input type="text" placeholder="请输入代办事项" value={val} onChange={this.change} onKeyDown={this.add}/>
            </header>
        )
    }
    change = (ev) => {
        this.setState({
            val:ev.target.value
        })
    }

    add = (ev) => {
        if(ev.keyCode === 13){
            watch.emit('add',this.state.val)
        }
    }
}

export default TodoInput