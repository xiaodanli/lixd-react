import React,{Component} from 'react'
import './scss/jd.scss'

function TopContent(props){
    let {title,url,desc} = props.data;
    return <div>
        <h1>{title}</h1>
        <dl>
            <dt>
                <img src={url} alt=""/>
            </dt>
            <dd>
                {desc}
            </dd>
        </dl>
    </div>
}

export default TopContent