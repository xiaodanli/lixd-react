import Home from '../views/home'
import Manage from '../views/manage'
import Census from '../views/manage/census'
import Detail from '../views/manage/detail/index'
import Card from '../views/manage/detail/card'
import Check from '../views/manage/detail/check'
const routes = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/manage',
        component:Manage,
        children:[
            {
                path:'/manage/census',
                component:Census
            },
            {
                path:'/manage/detail',
                component:Detail,
                children:[
                    {
                        path:'/manage/detail/card',
                        component:Card
                    },
                    {
                        path:'/manage/detail/check',
                        component:Check
                    },
                    {
                        path:'/manage/detail',
                        redirect:'/manage/detail/card'
                    }
                ]
            },
            {
                path:'/manage',
                redirect:'/manage/detail'
            }
            
        ]
    },
    {
        path:'/',
        redirect:'/home'
    }
]

export default routes