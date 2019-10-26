import React,{Component} from 'react'
import Con from './con'
import './index.scss'
import axios from 'axios'

class Index extends Component{
    constructor(props){
        super(props)
        this.state = {
            isShow:false,
            list:[]
        }
    }
    componentDidMount(){
        this.setState({
            isShow:true
        })
        this.getData();
    }
    getData = () => {
        axios.get('/api/list').then(res => {
            this.setState({
                isShow:false
            })
            if(res.data.code === 1){
                this.setState({
                    list:res.data.data
                })
            }
        })
    }
    render(){
        let {isShow,list} = this.state;
        return (
            <div className="wrap">
                <button onClick={this.getData}>刷新</button>
                <div className="loading" style={{display:isShow?'block':'none'}}>loading</div>
                <Con list={list}/>
            </div>
        )
    }
}

export default Index