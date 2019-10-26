import React,{Component} from 'react'
import axios from 'axios'
import Item from '../../component/item'

class Hot extends Component{
    state = {
        hotList:[]
    }
    componentDidMount(){
        axios.get('/api/hot').then(res => {
            if(res.data.code === 1){
                this.setState({
                    hotList:res.data.data.movieList
                })
            }
        })
    }
    render(){
        let {hotList} = this.state;
        return <div>
            {hotList.map((item,index) => <Item key={index} item={item} ></Item>)}
        </div>
    }
}

export default Hot