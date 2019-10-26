import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'

class Head extends Component{
    static defaultProps = {
        title:'猫眼电影',
        isBack:false
    }

    static propTypes = {
        isBack:PropTypes.bool,
        title:PropTypes.string
    }
    
    render(){
        let {title,isBack,history} = this.props;
        return (
            <header>
                {isBack && <span onClick={() => {history.goBack()}}>&lt;</span>}
                <span>{title}</span>
            </header>
        )
    }
}

export default withRouter(Head)