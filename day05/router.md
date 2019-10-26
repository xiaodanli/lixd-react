#### react router

react-router     :核心api   Route  Switch 

react-router-dom ：跳转链接的组件   Link  NavLink

##### 安装

cnpm i react-router-dom -S  5.0.1

#### react-router-dom组件

- BrowserRouter ---- > history  pushState  replaceState

- HashRouter ----->   hash   onhashchange

- Route 根据路径显示匹配的视图   

path    

component

render ={() => {return react元素}}

exact  精准匹配

- Redirect  重定向  from="/"   to="导目标路径"

- Link 

to：string/object

replace：boolean  是否替换当前的路由

- NavLink

activeClassName 默认类名：active 

activeStyle:直接添加行内样式

- Switch 

>注：一定要把大范围的路由放在下方，小范围放在上方

Redirect 放在最下面













