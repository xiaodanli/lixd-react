import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import examAction from '../store/exam.action'

class Exam extends Component{
    render(){
        let {curdata} = this.props;
        return <div>
            <h2>{curdata.title}</h2>
            {curdata.success}
            {curdata.selected}
            <ul>
                {curdata.options && curdata.options.map(item => <li key={item.id} onClick={() => {
                    this.chooseitem(item.id)
                }}>
                    <span className={`check-item ${(curdata.selected !== -1) && (item.id === curdata.success) ?'success':''}` }></span>
                    {item.text}</li>)}
            </ul>
            <footer>
                <button onClick={() => {this.changenum(true)}}>上一题</button>
                <button>提交</button>
                <button onClick={() => {this.changenum(false)}}>下一题</button>
            </footer>
        </div>
    }
    componentDidMount(){
        this.props.initData('/api/exam')
    }

    changenum = (flag) => {
        let {index,length} = this.props;
        index = flag ? index - 1 : index + 1;
        if(index < 0) return;
        if(index >= length) return;
        console.log(index)
        this.props.changeNum(index);
    }

    chooseitem = (id) => {
        this.props.chooseItem(id)
    }
}

export default connect(state => {
    return {
        curdata:state.exam.curdata,
        index:state.exam.index,
        length:state.exam.length
    }
},
(dispatch) => {
    return bindActionCreators(examAction,dispatch) 
})(Exam)