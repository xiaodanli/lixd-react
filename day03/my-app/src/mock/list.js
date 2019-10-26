import Mock from 'mockjs'

Mock.mock('/api/list',{
    'list|10':[
        {
            title:'@ctitle'
        }
    ]
})