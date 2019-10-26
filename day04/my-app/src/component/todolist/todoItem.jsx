import React,{Component} from 'react'

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShow:true,
            itemVal:this.props.item.val
        }
    }

    componentWillReceiveProps(nextProps,nextState){
        this.setState(
            {
                itemVal:nextProps.item.val
            }
        )
    }

    render(){
        let {isShow,itemVal} = this.state;
        let {isChecked,val} = this.props.item;
        let {index,changeCheck,del} = this.props;
        return (
            <div>
                <input type="checkbox" checked={isChecked} onChange={() => {changeCheck(isChecked,index)}}/>
                {isShow?<p onClick={() => {this.setState({isShow:false})}}>{val}</p>:<input type="text" value={itemVal} onChange={this.change} onKeyDown={this.edit}/>}
                <button onClick={() => {del(isChecked,index)}}>删除</button>
            </div>
        )
    }

    //选中
    // 1.把isChecked true  2.index

    // () => {editVal(isChecked,index,itemVal)}


    change = (ev) => {
        this.setState({
            itemVal:ev.target.value
        })
    }

    edit = (ev) => {
        if(ev.keyCode === 13){
            let {isChecked} = this.props.item;
            let {index} = this.props;
            this.props.editVal(isChecked,index,this.state.itemVal);
            this.setState({
                isShow:true
            })
        }
    }
}

export default TodoItem