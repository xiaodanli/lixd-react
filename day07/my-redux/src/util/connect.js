import React, { Component } from 'react'
import context from './context'

function connect(getData){
    return (Com) => {
        return class extends Component{
            render(){
                return <context.Consumer>
                    {
                        value => {
                            let data = getData(value);
                            return <Com {...data}/>
                        }
                    }
                </context.Consumer>
            }
        }
    }
}

export default connect