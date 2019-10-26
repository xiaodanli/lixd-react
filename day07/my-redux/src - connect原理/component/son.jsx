import React, { Component } from 'react'
import Children from './children'
import connect from '../util/connect'

class Son extends Component {
    render() {
        return (
            <div>
                <Children/>
                {this.props.num}
                {/* <context.Consumer>
                    {
                        value => {console.log(value)}
                    }
                </context.Consumer> */}
            </div>
        )
    }
}

// let newSon = connect()(Son)

console.log(connect())
export default connect((state)=>{
    console.log("state",state)
    return {
        num:state.num
    }
},(dispatch) => {
    return {}
})(Son)