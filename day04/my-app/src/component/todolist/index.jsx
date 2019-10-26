import React,{Component} from 'react'
import TodoInput from './todoInput'
import TodoCon from './todoCon'

class TodoList extends Component{
    render(){
        return (
            <div>   
                <TodoInput/>
                <TodoCon/>
            </div>
        )
    }
}

export default TodoList

