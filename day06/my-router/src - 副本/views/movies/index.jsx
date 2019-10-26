import React,{Component} from 'react'
import Head from '../../component/Head'
import Foot from '../../component/foot'
import {NavLink} from 'react-router-dom'
import RouterView from '../../router/routerView'


class Movies extends Component{
    render(){
        let {history,routes} = this.props;
        return (
            <div className="wrap">
                <Head></Head>
                <main>
                    <nav>
                        <button onClick={() => {
                            history.push('/city')
                        }}>北京</button>
                        <div>
                            <NavLink to="/movies/hot">正在热映</NavLink>
                            <NavLink to="/movies/will">即将上映</NavLink>
                        </div>
                        <button onClick={() => {
                            history.push('/search')
                        }}>搜索</button>
                    </nav>
                    <div>
                        {/* <Switch>
                            <Route path="/movies/hot" component={Hot}></Route>
                            <Route path="/movies/will" component={Will}></Route>
                            <Redirect from="/movies" to="/movies/hot"></Redirect>
                        </Switch> */}
                        <RouterView routes={routes}/>
                    </div>
                </main>
                <Foot></Foot>
            </div>
        )
    }
}

export default Movies