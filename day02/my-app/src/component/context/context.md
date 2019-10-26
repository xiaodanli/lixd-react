#### 跨组件通信

1.跨组件传递数据

context 上下文对象  react  

let context = React.createContext();

Provider:提供者使用value属性提供数据

<Provider value={传家宝}></Provider> 

传多个值 ：{}  []

Consumer:消费者通过children接受函数，函数形参就是value值

<Consumer>
    {
        (value) => {
            console.log(value) //传家宝
            return <h1>{value}</h1>   //consumer展示的视图
        }
    }
</Consumer>


如果有多个标签，<></>,不能写key值


#### 组件间通信

1.父 --- > 子  props

2.子 --- > 父  通过事件

3.跨组件   context

4.同级组件 

    1)寻找共同的父级，传递数据

    2)发布订阅模式

//vue 同级左键通信

main.js  Vue.prototype.$bus = new Vue();  //收集分发数据

$bus.$on('fn',(params1,params2,....) => {

})     订阅

$bus.$emit('fn',实参1，实参2...)   发布 

class EventBus{
    constructor(){
        
    }

    on(){

    }

    emit(){

    }
}

let bus = new EventBus();

bus.on('fn',(color1,color2) => {

})

bus.on('fn',(color1,color2) => {

})

bus.emit('fn','red','blue')









