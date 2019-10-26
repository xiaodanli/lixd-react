import React,{Component} from 'react'
import Head from '../component/Head'
import Foot from '../component/foot'

class Cinema extends Component{
    render(){
        return <div className="wrap">
            <Head title="影院"></Head>
            <main>
                内容
            </main>
            <Foot></Foot>
        </div>
    }
}

export default Cinema