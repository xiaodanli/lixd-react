import React, { Component } from 'react'
import Foot from '../component/foot'
import Head from '../component/head'

class Classify extends Component {
    render() {
        return (
            <div className="wrap">
                <Head></Head>
                <div className="main">内部</div>
                <Foot></Foot>
            </div>
        )
    }
}

export default Classify