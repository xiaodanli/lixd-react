#### ref

用来操作dom节点，不仅可以加给react元素，还可以加给组件

ref  

    1>value :string //官方不推荐
    在当前组件实例中多一个refs的属性,属性值为一个对象，对象的key就是ref属性设置的

    2>value：function//官方推荐

    当状态发生变化时，会触发两次，第一个形参的值为null，

    函数的形参就是真实的dom节点

#### ref加给组件时，可以通过import {findDOMNode} from react-dom

用来获取组件的真实节点






