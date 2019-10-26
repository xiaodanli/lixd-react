import React from 'react'

let topContent = (props) => {
    let {topData} = props
    return <div>
        <h1>{topData.title}</h1>
        <dl>
            <dt>
                <img src={topData.url} alt=""/>
            </dt>
            <dd>{topData.con}</dd>
        </dl>
    </div>
}
export default topContent

