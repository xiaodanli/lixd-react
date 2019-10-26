import React, { Component } from 'react'
import Son from './son'


class Parent extends Component {
    state = {
        title:'传家宝'
    }
    render() {
        return (
            <div>
                parent
                {/* <context.Provider value={this.state.title}>
                    <Son/>
                </context.Provider> */}
            </div>
        )
    }
}
export default Parent