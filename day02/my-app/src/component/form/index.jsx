import React,{Component} from 'react'

class Form extends Component{
    state = {
        username:'lixd',
        isCheck:false,
        desc:'',
        choose:'3'
    }
    render(){
        let {isCheck,choose} = this.state;
        return (
            <div>
                <input type="text" value={this.state.username}/>
                <input type="text" value={this.state.username} onChange={this.change}/>
                <input type="text" defaultValue="123" ref="pwd"/>
                <input type="checkbox" checked={isCheck} onChange={this.changeCheck}/>
                {this.state.isCheck?'true':'false'}
                <select name="" id="" value={choose} onChange={this.choose}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                {choose}
                {/* <textarea name="" id="" cols="30" rows="10" value={desc} onChange={}></textarea> */}
                <button onClick={this.login}>登录</button>
            </div>
        )
    }

    choose = (e) => {
        this.setState({
            choose:e.target.value
        })
    }

    changeCheck = () => {
        let {isCheck} = this.state;
        this.setState({
            isCheck:!isCheck
        })
    }

    login = () => {
        console.log(this.refs.pwd.value)
    }

    change = (e) => {
        this.setState({
            username:e.target.value
        })
    }
}

export default Form