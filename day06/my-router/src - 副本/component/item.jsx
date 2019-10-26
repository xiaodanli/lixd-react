import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'

class Item extends Component{
    render(){
        console.log(this.props)
        let {item,history} = this.props;
        return (
            <dl>
                <dt>
                    <img src={item.img.replace('w.h','128.180')} alt=""/>
                </dt>
                <dd>
                    <h3>{item.nm}</h3>
                    {item.sc?<span>评分：{item.sc}</span>:<span>{item.wish}想看</span>}
                    <span>主演:{item.star}</span>
                    <span>{item.showInfo}</span>
                </dd>
                <dd>
                    {/* item.id */}
                    <button onClick={() => {history.push({pathname:`/detail/${item.id}`})}}>{item.preShow?'预售':'购票'}</button>
                </dd>
            </dl>
        )
    }
}

// withRouter 接收一个类组件  返回新组件  可以接收路由相关props

//  withRouter 高阶组件

// function withRouter(component){
//     return class extends Component{
//         render(){
//             return  <component {...this.props}></component>
//         }
//     }
// }

export default withRouter(Item)