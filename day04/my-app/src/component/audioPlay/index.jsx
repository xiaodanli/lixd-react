import React,{Component}  from 'react'

import Left from './component/Left'
import Right from './component/Right'
import './index.scss';

class Index extends Component{
    render(){
        return (
            <div className="wrap">
                <Left/>
                <Right/>
            </div>
        )
    }
}

export default Index