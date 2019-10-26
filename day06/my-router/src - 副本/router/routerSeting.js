// import Login from '../views/login'
// import Movies from '../views/movies/index.jsx'
// import Cinema from '../views/cinema'
// import My from '../views/my'
// import City from '../views/city'
// import Search from '../views/search'
// import Detail from '../views/detail'
// import Hot from '../views/movies/hot'
// import Will from '../views/movies/will'

import React,{Component} from 'react'

// import Loadable from 'react-loadable';

//import 指令 静态加载 在打包时加载进来的

//import() 方法 动态加载   运行时加载  异步加载

console.log(import('../views/movies/index.jsx'))

// new Promise((resolve,reject) => {
//     console.log("=====");
// })

function Loading(){
    return <div>loading....</div>
}

function Loadable(params){
    return class extends Component{
        state = {
            Com:params.loading
        }
        render(){
            let {Com} = this.state;
            return <Com {...this.props}/>
        }
        componentDidMount(){
            params.loader().then(res => {
                this.setState({
                    Com:res.default
                })
            })
        }
    }
}

// console.log(import('../views/movies/index.jsx'))

let Movies = Loadable({
    loading:Loading,
    loader:() => import('../views/movies/index.jsx')
})

let Login = Loadable({
    loading:Loading,
    loader:() => import('../views/login.jsx')
})
let Cinema = Loadable({
    loading:Loading,
    loader:() => import('../views/cinema.jsx')
})
let My = Loadable({
    loading:Loading,
    loader:() => import('../views/my.jsx')
})
let Search = Loadable({
    loading:Loading,
    loader:() => import('../views/search.jsx')
})

let City = Loadable({
    loading:Loading,
    loader:() => import('../views/city.jsx')
})

let Detail = Loadable({
    loading:Loading,
    loader:() => import('../views/detail.jsx')
})

let Hot = Loadable({
    loading:Loading,
    loader:() => import('../views/movies/hot.jsx')
})
let Will = Loadable({
    loading:Loading,
    loader:() => import('../views/movies/will.jsx')
})

const routes = [
    {
       path:'/login',
       component:Login
    },
    {
        path:'/movies',
        component:Movies,
        children:[
            {
                path:'/movies/hot',
                component:Hot
            },
            {
                path:'/movies/will',
                component:Will
            },
            {
                path:'/movies',
                redirect:'/movies/hot'
            }
        ]
     },
     {
        path:'/cinema',
        component:Cinema
     },
     {
        path:'/my',
        component:My
     },
     {
        path:'/city',
        component:City
     },
     {
        path:'/search',
        component:Search
     },
     {
        path:'/detail/:id',
        component:Detail
     },
     {
         path:'/',
         redirect:'/movies'
     }
]

export default routes