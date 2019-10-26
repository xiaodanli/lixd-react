import React,{Component} from 'react'
import Head from '../component/Head'
import Foot from '../component/foot'
import IsLogin from '../util/isLogin'

class My extends Component{
    render(){
        return <div className="wrap">
            <Head title="我的"></Head>
            <main>
                内容
            </main>
            <Foot></Foot>
        </div>
    }
}

// class IsLogin extends Component{
//     state = {
//         isLogin:false
//     }
//     render(){
//         let {isLogin} = this.state;
//         return isLogin ? <My/>: <></>
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




export default IsLogin(My)