import React,{Component} from 'react'
import Dialog from './dialog'

class Parent extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {}
    // }
    state = {
        isShow:false,
        title:'',
        con:'',
        type:''
    }
    render(){
        let {isShow,title,con,type} = this.state;
        return (
            <div>
                <Dialog isShow={isShow} close={this.close} title={title} con={con} type={type}/>
                <button onClick={() => {this.open('alert')}}>alert</button>
                <button onClick={() => {this.open('comfirm')}}>comfirm</button>
                <button onClick={() => {this.open('prompt')}}>prompt</button>
            </div>
        )
    }

    open = (type) => {
        if(type === 'alert'){
            this.setState({isShow:true,title:'提示',con:'操作成功',type})
        }else if(type === 'comfirm'){
            this.setState({isShow:true,title:'提示',con:'确认执行此操作？',type})
        }else{
            this.setState({isShow:true,title:'请输入姓名',type})
        }
        
    }

    close = () => {
        this.setState({isShow:false})
    }
}
export default Parent