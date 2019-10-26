import React,{Component} from 'react'

class Dialog extends Component{
    render(){
        let {isShow,close,title,con,type} = this.props;
        return (
            <div className="dialog-wrap" style={{display:isShow?'block':'none'}}>
                <div className="inner-con">
                    <h2>{title}</h2>
                    <div className="con">
                        {type ==='prompt'?<input type="text"/>:<div>{con}</div>}
                    </div>
                    <div className="btns">
                        {type != 'alert' ? <button onClick={close}>取消</button> : null}
                        <button onClick={close}>确定</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialog