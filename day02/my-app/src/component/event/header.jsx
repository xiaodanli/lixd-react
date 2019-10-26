import React,{Component} from 'react'
import watcher from './watch'
class Head extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            title:'标题'
        }
        watcher.on('change',(title) => {
            this.setState({
                title
            })
        })
    }
    render(){
        return (
            <header>{this.state.title}</header>
        )
    }
}

export default Head