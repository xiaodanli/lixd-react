import React,{Component} from 'react'

class Item extends Component{
    render(){
        let {title} = this.props.item;
        return (
            <div className="item">
                {title}
            </div>
        )
    }
}

export default Item