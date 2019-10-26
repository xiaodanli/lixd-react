import React, { Component } from 'react'
import Children from './chidlren'
import connext from '../util/context'

class Parent extends Component {
    render() {
        return (
            <div>
                <connext.Provider value={{title:'connext 传递参数'}}>
                    <Children/>
                </connext.Provider>
            </div>
        )
    }
}

export default Parent
