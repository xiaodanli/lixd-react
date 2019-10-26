import React, { Component } from 'react'
import GrandSon from './grandSon'
import connext from '../util/context'

import connect from '../util/connect'

class Children extends Component {
    render() {
        return (
            <div>
                {/* <connext.Consumer>
                    {
                        value => {
                            return <h1>{value.title}</h1>
                        }
                    }
                </connext.Consumer> */}
                {this.props.title}
                <GrandSon/>
            </div>
        )
    }
}

export default connect((state) => {
    console.log(state);
    return {
        title:state.title
    }
})(Children)