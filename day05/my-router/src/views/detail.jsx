import React,{Component} from 'react';

class Detail extends Component{
    
    render(){
        console.log(this.props.match.params.id);
        return <h1>详情</h1>
    }
}

export default Detail