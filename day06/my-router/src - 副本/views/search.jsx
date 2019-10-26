import React,{Component} from 'react'
import Head from '../component/Head'

class Search extends Component{
    render(){
        return (
            <div>
                <Head title="搜索" isBack={true}></Head>
            </div>
        )
    }
}

export default Search