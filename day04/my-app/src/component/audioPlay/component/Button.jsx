import React,{Component}  from 'react'

class ButtonCount extends Component{
    render(){
        let {name,source} = this.props.item;
        let {active,handClick,index} = this.props;
        return (
            <div onClick={() => {handClick(index,this.refs.audioDom)}} className={`btn ${active?'active':'null'}`}>
                <p>{name}</p>
                <audio src={source} ref="audioDom"></audio>
            </div>
        )
    }
}

export default ButtonCount
