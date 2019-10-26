import React,{Component} from 'react'
import watcher from './watch'

class List extends Component{
    render(){
        return (
            <div>
                <ul>
                    <li onClick={this.change}>标题一</li>
                    <li>标题一</li>
                </ul>
            </div>
        )
    }

    change = () => {
        watcher.emit('change','123')
    }
}

export default List