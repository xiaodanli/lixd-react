import React, { Component } from 'react'
import connect from '../util/connect'

class GrandSon extends Component {
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

export default connect((state) => {
    console.log(state)
    return {
        title:'-===-=-=-='
    }
})(GrandSon)