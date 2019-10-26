import React,{Component} from 'react'
class Form extends Component{
    state = {
        username:'lili',
        address:'河北',
        sex:'男',
        hobby:[],
        msg:'',
        list:['篮球','足球','羽毛球']
    }
    handleChange = (ev) => {
        this.setState({
            [ev.target.name]:ev.target.value
        },() => {
            console.log(this.state)
        })
    }

    hobbyChange(index,ev) {
        let hobby = this.state.hobby;
        
        if(ev.target.checked){
           hobby.push(this.state.list[index])
        }else{
            let ind = hobby.findIndex(item => item === ev.target.value);  
            hobby.splice(ind,1);  
        }
        this.setState({
            hobby
        },() => {
            console.log(hobby)
        })
    }
    render(){
        let {username,address,list,msg} = this.state;
        return (
            <form>
                <div>
                    姓名：<input type="text" name="username" value={username} onChange={this.handleChange}/>
                </div>
                <div>
                    性别： <input type="radio" name="sex" value="男" onChange={this.handleChange}/> 男 <input  value="女" name="sex" type="radio" onChange={this.handleChange}/> 女
                </div>
                <div>
                    爱好：
                    {list.map((item,index) => {
                       return <div key={index}>
                            {item}
                            <input type="checkbox" name="hobby" value={item} onChange={(this.hobbyChange.bind(this,index))}/>
                        </div>
                    })}
                </div>
                <div>
                    地址：
                    <select name="address" id="" value={address} onChange={this.handleChange}>
                        <option value="河北">河北</option>
                        <option value="河男">河男</option>
                    </select>
                </div>
                <div>
                    建议：
                    <textarea name="msg" value={msg} onChange={this.handleChange}></textarea>
                </div>
            </form>
        )
    }
}

export default Form