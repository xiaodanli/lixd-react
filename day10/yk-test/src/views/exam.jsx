import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import examActions from '../store/exam.action'


class Exam extends Component{
    state = {
        open:false
    }
    render(){
        console.log(this.props.curdata);
        let {curdata,tip,rightNum,history} = this.props;
        let {open} = this.state;
        console.log(history)
        return <div>
            <h2>{curdata.title}</h2>
            <ul>
                {curdata.options && curdata.options.map(item => <li key={item.id} onClick={() => {this.chooseitem(item.id)}}>
                    <span className={`icon ${(item.id === curdata.selected) ? 'selected' :''} ${(curdata.selected !== -1) && (item.id === curdata.success) ? 'success':''}`}></span>
                    {item.text}</li>)}
            </ul>
            <footer>
                <button onClick={() => {this.changeindex(true)}}>上一题</button>
                <button onClick={this.submit}>提交</button>
                <button onClick={() => {this.changeindex(false)}}>下一题</button>
            </footer>
            <div className="dialog" style={{display:open?'block':'none'}}>
                <div className="inner-con">
                    <h2>考试结果</h2>
                    <p>用时{tip}</p>
                    <p>你答对了{rightNum}道题</p>
                    <button onClick={() => {history.push('/')}}>确定</button>
                </div>
            </div>
        </div>
    }
    componentDidMount(){
        this.props.initData('/api/exam')
    }

    changeindex = (flag) => {
        let {index,length} = this.props;
        index = flag ? index - 1 : index + 1;  //0 - 1   -1  3道   2+1 3
        if(index < 0) return;
        if(index>=length) return;
        this.props.changeIndex(index);
    }

    chooseitem = (id) => {
        let {curdata} = this.props;
        curdata.selected === -1 && this.props.chooseItem(id);
    }
    //提交
    submit = () => {
        this.setState({
            open:true
        })
        this.props.submitAction();
    }
}

export default connect(state => {
    console.log("=====",state)
    return {
        curdata:state.exam.curdata,
        index:state.exam.index,
        length:state.exam.length,
        tip:state.exam.tip,
        rightNum:state.exam.rightNum
    }
},
(dispatch) => {
    return bindActionCreators(examActions,dispatch)
})(Exam)