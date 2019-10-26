import React,{Component} from 'react'

let  IsLogin = (Com) => {
    return class extends Component{
        state = {
            isLogin:false
        }
        render(){
            let {isLogin} = this.state;
            return isLogin ? <Com {...this.props}/>: <></>
        }

        componentDidMount(){
            let {history} = this.props;
            let user = window.localStorage.getItem('user');

            if(user){   //说明登录
                this.setState({
                    isLogin:true
                })
            }else{  //没有登录
                history.replace('/login')
            }
        }
    }
}

export default IsLogin