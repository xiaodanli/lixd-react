import React,{Component} from 'react'
import Parent from './parent'
import context from './context'
console.log(Parent);

class Home extends Component{
    state = {
        title:'传家宝'
    }
    render(){
        let {title} = this.state;
        return (
            <div>
                根组件
                <context.Provider value={{title,fn:(data) => {this.setState({title:data})}}}>
                    <Parent/>
                </context.Provider>
            </div>
        )
    }
}

export default Home