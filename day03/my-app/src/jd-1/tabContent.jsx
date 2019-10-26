import React,{Component} from 'react'

class TabContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            active:0
        }
    }
    render(){ //state发生变化时，render函数会执行，在render内会进行diff算法，比较最小化差异局部更新dom
        let {tabData} = this.props;
        let {active} = this.state;
        let tabCon = tabData[active].content;
        return (
            <div className="tab-wrap">
                <ul className="tab-bar">
                    {/* {渲染tabbar} */}
                    {
                        tabData.map((item,index) => <li style={{color:active === index?'red':'blue'}} key={index} onClick={() => {this.setState({active:index})}}>{item.title}</li>)
                    }
                </ul>
                {/* 渲染tab内容 */}
                <div className="tab-con">
                    <dl>
                        <dt>
                            <img src={tabCon.imgs} alt=""/>
                        </dt>
                        <dd>
                            <h1>{tabCon.title}</h1>
                            <ul>
                                {tabCon.links.map((item,i) => <li key={i}>{item}</li>)}
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
        )
    }
}

export default TabContent