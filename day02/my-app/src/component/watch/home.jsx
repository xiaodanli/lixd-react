import React,{Component} from 'react'
import Head from './header'

import List from './list'

class Home extends Component{
    render(){
        return (
            <div>
                <Head/>
                <List/>
            </div>
        )
    }
}

export default Home