import React, { Component } from 'react'
import context from '../util/context'

class Children extends Component {
    render() {
        return (
            <div>
                Children
                <context.Consumer>
                    {
                        value => {console.log(value)}
                    }
                </context.Consumer>
            </div>
        )
    }
}
export default Children