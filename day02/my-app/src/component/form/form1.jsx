import React,{Component} from 'react'

class Form extends Component{
    state = {
        username:'',
        sex:'',
        address:'',
        hobby:[],
        msg:'',
        list:['聊天','篮球','逛街']
    }

    handChange = (ev) => {
        let {name,value} = ev.target;

        this.setState({
            [name]:value
        },() => {
            console.log(this.state)
        })
    }

    hobbyChoose = (ev) => {
        let {hobby} = this.state;
        let {checked,value} = ev.target;
        if(checked){
            hobby.push(value)
        }else{
            let ind = hobby.findIndex(item => item === value);
            hobby.splice(ind,1);
        }
       
        this.setState({
            hobby
        },() => {
            console.log(this.state.hobby)
        })
    }

    submit = (ev) => {
        ev.preventDefault();
        console.log(this.state);
    }

    render(){
        let {username,address,msg,list} = this.state;
        return (
            <form>
                <div>
                    姓名: <input name="username" type="text" value={username} onChange={this.handChange}/>
                </div>
                <div>
                    性别：<input name="sex" type="radio" value="男"  onChange={this.handChange}/> 男 <input name="sex" type="radio" value="女"  onChange={this.handChange}/> 女
                </div>
                <div>
                    地址：<select value={address} name="address"  onChange={this.handChange}>
                        <option value="河北省">河北省</option>
                        <option value="北京">北京</option>
                        <option value="上海">上海</option>
                    </select>
                </div>
                <div>
                    爱好: 
                    {list.map((item,index) => <label htmlFor="index" key={index}>
                        <input id={index} type="checkbox" value={item} onChange={this.hobbyChoose}/>{item}
                    </label>)}
                </div>
                <div>
                    信息：<textarea value={msg} name="msg"  onChange={this.handChange}></textarea>
                </div>
                <button onClick={this.submit}>提交</button>
            </form>
        )
    }
}

export default Form