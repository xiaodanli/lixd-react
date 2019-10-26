import React,{Component}  from 'react'

class Right extends Component{
    render(){
        return (
            <div>
                <div className="power">
                    <h1>Power</h1>
                    <div className="power-btn"></div>
                </div>
                <h1>名字</h1>
                <input type="range"/>
            </div>
        )
    }
}

export default Right