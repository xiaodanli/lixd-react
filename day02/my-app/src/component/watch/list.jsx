import React,{Component} from 'react'

import watch from './watch'

class List extends Component{
    render(){
        return (
            <ul>
                <li onClick={this.change}>标题一</li>
            </ul>
        )
    }

    change = () => {
        watch.emit('changeHeader','标题一')
    }
}

export default List