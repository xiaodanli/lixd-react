//connect()()
import React,{Component} from 'react'
import context from './context'

//connect((state) => {
//     return {}
// })(Son)

function connect(getData){
    return (Com) => {
        return class extends Component{
            render(){
                return <context.Consumer>
                    {
                        value => {
                            console.log(value)
                            let val = getData(value)
                            return <Com {...val}/>
                        }
                    }
                </context.Consumer>
            }
        }
    }
}

export default connect