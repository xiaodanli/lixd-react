import React,{Component} from 'react'

import List from './list'
import Head from './header'




class Home extends Component{
    render(){
        return (
            <div>
                <Head></Head>
                <List></List>
            </div>
        )
    }
}

export default Home