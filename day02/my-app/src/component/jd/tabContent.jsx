import React,{Component} from 'react'

class TabContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            active:0
        }
    }
    render(){
        let {data} = this.props;
        let {active} = this.state;
        let content = data[active].content;
        return <div>
            <ul>
                {data.map((item,index) => <li className={active === index ? 'red': ''} onClick={() => {this.setState({active:index})}} key={index}>{item.type}</li>)}
            </ul>
            <div className="con">
                <dl>
                    <dt>
                        <img src={content.url} alt=""/>
                    </dt>
                    <dd>
                        <h2>{content.title}</h2>
                        <ol>
                            {content.link.map((item,i) => <li key={i}>{item.text}</li>)}
                        </ol>
                    </dd>
                </dl>
            </div>
        </div>
    }
}

export default TabContent