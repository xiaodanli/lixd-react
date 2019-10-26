#### 一级路由

login  登录
movie  电影
    ##### 二级
        即将上映
        正在热映
cinema 影院
my     我的
search 搜索
city   城市
detail 详情页   动态路由

#### 验证 prop-types

```npm install --save prop-types```

import PropTypes from 'prop-types';

一种写法：
 static propTypes = {
    isBack:PropTypes.bool,
    title:PropTypes.string
}



