import React,{Component} from 'react'
import IsLogin from '../util/isLogin'

class Detail extends Component{
    render(){
        let {match} = this.props;
        return (
            <h1>Detail{match.params.id}</h1>
        )
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        
    }
}

// class IsLogin extends Component{
//     state = {
//         isLogin:false
//     }
//     render(){
//         let {isLogin} = this.state;
//         return isLogin ? <Detail {...this.props}/>: <></>
//     }

//     componentDidMount(){
//         console.log(this.props)
//         let {history} = this.props;
//         let user = window.localStorage.getItem('user');

//         if(user){   //说明登录
//             this.setState({
//                 isLogin:true
//             })
//         }else{  //没有登录
//             history.replace('/login')
//         }
//     }
// }

export default IsLogin(Detail)